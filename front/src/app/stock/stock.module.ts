import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [StockComponent, CreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
