import { Component, OnInit } from '@angular/core';
import { FLAVOURS } from './mock-flavours';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent implements OnInit {

  items = FLAVOURS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
