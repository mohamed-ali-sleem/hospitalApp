import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./blog-list/blog-list.module').then(m => m.BlogListModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule)
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
