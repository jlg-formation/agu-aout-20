import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

export const url = 'http://localhost:3000/ws/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article instantiated');
    this.refresh();
  }

  refresh(): void {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  add(a: Article): void {
    super.add(a);
    this.http.post<void>(url, a).subscribe({
      next: () => {
        console.log('post ok');
        this.refresh();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  remove(selectedArticles: Article[]): void {
    super.remove(selectedArticles);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: selectedArticles.map((a) => a.id),
    };
    this.http.delete<void>(url, options).subscribe({
      next: () => {
        console.log('delete ok');
        this.refresh();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
