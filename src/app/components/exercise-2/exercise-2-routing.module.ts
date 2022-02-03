import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarsChartsComponent} from "./bars-chart/bars-charts.component";

const routes: Routes = [
          {
            path: 'bars-chart',
            component: BarsChartsComponent,
          },

  { path: '', redirectTo: 'bars-chart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise2RoutingModule { }
