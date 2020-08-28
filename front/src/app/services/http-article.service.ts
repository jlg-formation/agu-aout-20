import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';

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
    this.http.get('http://localhost:3000/ws/articles').subscribe({
      next: (data) => {
        console.log('data: ', data);
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
