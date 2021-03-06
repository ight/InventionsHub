import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  postdata;

  ngOnInit() {
  	this.http.get("http://jsonplaceholder.typicode.com/users").
  	map((response) => response.json()).
  	subscribe((data) => {this.displaydata(data);})
  }
  displaydata(data) { this.httpdata = data};

  onClickSubmit(data){
    this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+data.userId).
    map((response) => response.json()).
    subscribe((data) => {this.searchdata(data);})
  }
  searchdata(data) { this.postdata = data};
}
