import { Component, OnInit } from '@angular/core';
import { Hero,HEROES } from './heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros : Hero[];
  constructor() {this.heros = HEROES; }

  ngOnInit(): void {
  }

}
