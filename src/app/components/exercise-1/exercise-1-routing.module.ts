import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostTableComponent} from "./post-table/post-table.component";
import {PostChartsComponent} from "./post-charts/post-charts.component";

const routes: Routes = [
          {
            path: 'posts',
            component: PostTableComponent,
          },
          {
            path: 'graph',
            component: PostChartsComponent,
          },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise1RoutingModule { }
