import { Component, OnInit } from '@angular/core';
import { faRedoAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRedoAlt = faRedoAlt;
  faPlus = faPlus;

  articles: Article[] = [
    { name: 'Tournevis', price: 2.44, qty: 140 },
    { name: 'Tournevis cruciforme', price: 2.78, qty: 110 },
    { name: 'Marteau', price: 1.2, qty: 25 },
    { name: 'Pince', price: 4.21, qty: 13 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
