import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  newcomponent = "Entered in new component created";
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isavailable = true;
  myClickFunction(event){
  	console.log("heyyyeyeyey");
    alert("Button is clicked");
    console.log(event);	
    this.isavailable = false;																																																																																						
  }
  changeMonths(event){
    console.log("moth selected");
    alert("Month selected");
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
