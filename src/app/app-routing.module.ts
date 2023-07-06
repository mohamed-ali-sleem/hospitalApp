import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)
      },
    ],
    canActivate: [],
    data: { roles: [] },
  },
  {
    path: 'blogs',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/blogs/blogs.module').then(m => m.BlogsModule)
      },
    ],
    canActivate: [],
    data: { roles: [] },
  },
  {
    path: 'login',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/login/login.module').then(m => m.LoginModule)
      },
    ],
    canActivate: [],
    data: { roles: [] },
  },
  // {
  //   path: 'auth',
  //   component: BaseComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)
  //     },
  //   ],
  //   canActivate: [],
  //   data: { roles: [] },
  // },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }