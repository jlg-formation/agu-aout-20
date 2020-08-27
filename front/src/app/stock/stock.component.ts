import { Component, OnInit } from '@angular/core';
import { faRedoAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRedoAlt = faRedoAlt;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article): void {
    console.log('a: ', a);
  }
}
