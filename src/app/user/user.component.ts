import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../heros/heroes';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Hero[] = HEROES
  constructor() { }

  ngOnInit(): void {
  }

}
