import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageDetailComponent } from './languages/language-detail/language-detail.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';
import { AboutComponent } from './about/about.component';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';
import { ChildAComponent } from './about/child-a/child-a.component';
import { ChildBComponent } from './about/child-b/child-b.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent,
    HerosComponent,
    HeroDetailComponent,
    AboutComponent,
    AboutDetailComponent,
    ChildAComponent,
    ChildBComponent,
    TableComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
