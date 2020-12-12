import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Language,LANGUAGES} from '../languges';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {

  language: Language; 
  
  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe( (params) => {
          for(let lang of LANGUAGES) {
              if(lang.id == +params['id']) {
                  this.language = {
                      id: +params['id'],
                      name: lang.name
                  }
              }  
          } 
      });
  }

}
