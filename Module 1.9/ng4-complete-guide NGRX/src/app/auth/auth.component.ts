import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit ,OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  private componentSubs: Subscription;

  private storeSub: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onHandleError() {
    this.store.dispatch(new AuthActions.ClearError());
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      //authObs = this.authService.login(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({email: email, password: password})
      );
    } else {
      this.store.dispatch(new AuthActions.SignupStart({email: email, password: password}))
    }

    form.reset();
  }

  private showErrorAlert(message) {
    const alertCmpFacotry = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewcontainerRef = this.alertHost.viewContainerRef;
    hostViewcontainerRef.clear();

    const componentRef = hostViewcontainerRef.createComponent(alertCmpFacotry);
    
    componentRef.instance.message = message;
    this.componentSubs = componentRef.instance.close.subscribe(() => {
      this.componentSubs.unsubscribe();
      hostViewcontainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.componentSubs) {
      this.componentSubs.unsubscribe();
    }
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
