import { Component, OnInit } from '@angular/core';
import { CONES } from '../mock-data/mock-cones';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cones = CONES;

  constructor() { }

  ngOnInit(): void {
  }

}
