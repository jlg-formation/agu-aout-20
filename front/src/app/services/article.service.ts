import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.44, qty: 140 },
    { name: 'Tournevis cruciforme', price: 2.78, qty: 110 },
    { name: 'Marteau', price: 1.2, qty: 25 },
    { name: 'Pince', price: 4.21, qty: 13 },
  ];
  constructor() {}

  add(a: Article): void {
    this.articles.push(a);
  }
}
