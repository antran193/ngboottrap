import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildAComponent } from './child-a/child-a.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  parentMessage = "message from parent";
  
  constructor() { }

  ngOnInit(): void {
  }
  changechilda() {
    this.parentMessage = "123";
  }
  mess: string;
  receiveMessage($event) {
    this.mess = $event
  }

}
