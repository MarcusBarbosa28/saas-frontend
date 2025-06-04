import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    { title: 'Clientes', value: 120 },
    { title: 'Vendas', value: 75 },
    { title: 'Suporte', value: 5 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
