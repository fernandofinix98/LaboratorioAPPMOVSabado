import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './auth/registrar/registrar.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'registro', component: RegistrarPage},
  { path: 'registrar', component: RegistrarPage },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
