import { Component, OnInit } from '@angular/core';
import { Salesperson} from './salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

//create array of objects
SalesPersonList: Salesperson[]= [
      new Salesperson("Anup", "kumar", "anup@gmail.com", 5000),
      new Salesperson("shri", "Datar", "shri@gmail.com", 6000),
      new Salesperson("Dev", "kumar", "Dev@gmail.com" ,4000),
      new Salesperson("sures", "kumar", "sures@gmail.com" , 9000)
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
