import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';
import { AboutComponent } from './about/about.component';
import { ChildAComponent } from './about/child-a/child-a.component';
import { ChildBComponent } from './about/child-b/child-b.component';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';
import { HerosComponent } from './heros/heros.component';
import { LanguageDetailComponent } from './languages/language-detail/language-detail.component';
import { LanguagesComponent } from './languages/languages.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'languages',
    component: LanguagesComponent
  },
  {
    path: 'languages/:id',
    component: LanguageDetailComponent
  },
  {
    path: 'heros',
    component: HerosComponent, children :[
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]
  },
  {
    path : 'about',
    component : AboutComponent , children : [
      {path : 'aboutdetail',
      component : AboutDetailComponent},
      {path : 'child-a' , component: ChildAComponent},
      {path : 'child-b' , component: ChildBComponent}
    ]
  },
  {
    path: 'user',
    component: UserComponent,children:[
     {path: '',
     loadChildren: () => import('./user/user.moduel').then(m => m.UserModule)}]
  },
  {
    path : 'table', component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
