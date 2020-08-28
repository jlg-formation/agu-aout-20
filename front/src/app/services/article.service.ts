import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();
  constructor() {}

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  add(a: Article): void {
    this.articles.push(a);
    this.save();
  }

  remove(selectedArticles: Article[]): void {
    this.articles = this.articles.filter((a) => !selectedArticles.includes(a));
    this.save();
  }

  refresh(): void {
    this.articles = this.getArticles();
  }
}
