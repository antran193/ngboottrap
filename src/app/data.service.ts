import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataModel } from './table/jsondata.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable');
  }
  postData(data) {

    return this.http.post('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable',data)
  }
}
