import { Component, OnInit } from '@angular/core';
import {data, DATA} from './table'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table : data[] = DATA;
  keyrow = Object.keys(DATA[0]);
  header = Object.keys(DATA[0])
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.keyrow);
  }
  togglehidecol(a,event,index){
    // console.log(a);
    // console.log(event);
    console.log(index);
    if(event.target.checked == true)
    {
      console.log("this true")
      this.header.push(a);
      console.log(this.header)
    }  
    else {
      var b = this.header.indexOf(a)
      this.header.splice(b,1);
      console.log("this false")
      console.log(this.header)
    }
    
      
  }
}
