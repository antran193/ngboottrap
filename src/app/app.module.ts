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
import {HttpClientModule} from '@angular/common/http';
import { TablechildComponent } from './table/tablechild/tablechild.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';



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
    TablechildComponent,
    AccordionComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
