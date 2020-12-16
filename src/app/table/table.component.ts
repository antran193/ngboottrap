import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { dataModel } from './jsondata.model';

import { data, DATA } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table: data[] = DATA;
  keyrow = Object.keys(DATA[0]);
  header = Object.keys(DATA[0]);
  datahttp: dataModel[] = [];
  datagrid:dataModel[] = [];
  keydataj: string[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  datachange: { id: string; username: string; password: string } = { id: "", username: "", password: "" };

  constructor(private http: HttpClient, private service: DataService) {

  }
  refreshtable() {
    this.datahttp = this.datagrid.map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    console.log(this.keyrow);
    this.service.getData().subscribe((res: dataModel[]) => {
    
      this.keydataj = Object.keys(res[0]);
      this.datagrid =res
      this.collectionSize = this.datagrid.length;
      this.refreshtable();
      // debugger
    })

  }
  reload() {
    console.log(this.keyrow);
    this.service.getData().subscribe((res: dataModel[]) => {
      this.datagrid = res;
      this.keydataj = Object.keys(res[0]);
      this.collectionSize = this.datagrid.length;
      // debugger
    })

  }
  adddata() {
    console.log(this.datachange);
    this.service.postData(this.datachange).subscribe((res: dataModel[]) => {
      this.reload();
    })
  }

  togglehidecol(a, event, index) {

    // console.log(index);
    // if(event.target.checked == true)
    // {
    //   console.log("this true")
    //   this.headerj.push(a);
    //   console.log(this.headerj)
    // }  
    // else {
    //   var b = this.headerj.indexOf(a)
    //   this.headerj.splice(b,1);
    //   console.log("this false")
    //   console.log(this.headerj)
    // }   
  }

}
