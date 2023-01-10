import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full'},
  { path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  { path: 'storage', loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
