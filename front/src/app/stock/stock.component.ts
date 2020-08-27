import { Component, OnInit } from '@angular/core';
import { faRedoAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  faRedoAlt = faRedoAlt;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
