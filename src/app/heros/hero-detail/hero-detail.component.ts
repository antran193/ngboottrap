import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero, HEROES } from '../heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  
  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      for(let hero of HEROES) {
        if(hero.id == +params['id']) {
            this.hero = {
                id: +params['id'],
                name: hero.name
            }
        }  
    } 
    });
  }

}
