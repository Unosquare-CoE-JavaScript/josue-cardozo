import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { StorageComponent } from "./storage.component";

@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: StorageComponent }]),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class StorageModule { }
