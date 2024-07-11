import { Component, OnInit } from '@angular/core';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-pizza',
  templateUrl: './cards-pizza.component.html',
  styleUrls: ['./cards-pizza.component.css'],
  standalone: true,
  imports: [ RouterLink ]
})
export class CardsPizzaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
