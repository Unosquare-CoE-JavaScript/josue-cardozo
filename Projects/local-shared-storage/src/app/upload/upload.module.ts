import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { UploadComponent } from "./upload.component";
@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: UploadComponent }]),
    CommonModule,
    SharedModule
  ]
})
export class UploadModule { }