import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../local-data.service"

@Component({
  selector: 'app-datapipe',
  templateUrl: './datapipe.component.html',
  styleUrls: ['./datapipe.component.css']
})
export class DatapipeComponent implements OnInit {
  todaysDate;
	title = "Persnoal Details";
	name = "Prakash Bhakat";
	dateOfBirth = new Date(1991, 7, 24);
	address = { local_address: { Country: 'India', State: 'Chennai', Area: 'Shollingalur' } };
	earning = 0;

  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.todaysDate = this.localDataService.todaysDate();
  }

}
