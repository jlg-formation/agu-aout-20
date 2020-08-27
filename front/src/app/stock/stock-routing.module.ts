import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from './stock.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
