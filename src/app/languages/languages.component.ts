import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Language,LANGUAGES} from './languges';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] =LANGUAGES; 
  selectedLanguage: Language;
  
  constructor(
    private router: Router
  ) {

  }
  ngOnInit(){
   /*  this.languages = LANGUAGES; */

  }
  showInfo(langusge: Language): void {
    this.selectedLanguage = langusge;
    this.router.navigate(['/languages', this.selectedLanguage.id]);
  }

}
