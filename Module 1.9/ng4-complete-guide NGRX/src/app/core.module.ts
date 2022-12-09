import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceotorService } from "./auth/auth-interceptor.service";

@NgModule({
  providers: [ 
    {provide:  HTTP_INTERCEPTORS, useClass: AuthInterceotorService, multi: true}
  ]
})
export class CoreModule {}
