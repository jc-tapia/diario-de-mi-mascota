import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'message/:id', loadChildren: () => import('./view-message/view-message.module').then(m => m.ViewMessagePageModule) },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
