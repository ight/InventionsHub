import { Component } from '@angular/core';
import { LocalDataService } from "./local-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todaysDate;
  constructor(private localDataService: LocalDataService){ }
  ngOnInit() {
  	this.todaysDate = this.localDataService.todaysDate();
  }
}
