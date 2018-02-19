import { Injectable } from '@angular/core';

@Injectable()
export class LocalDataService {

  constructor() { }
  todaysDate(){
  	let newDate = new Date();
  	return newDate;
  }

}
