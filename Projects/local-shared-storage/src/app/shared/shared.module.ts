import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loadding-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
