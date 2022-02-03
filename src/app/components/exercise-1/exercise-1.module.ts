import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise1RoutingModule } from './exercise-1-routing.module';
import {PostTableComponent} from "./post-table/post-table.component";
import {PostChartsComponent} from "./post-charts/post-charts.component";
import {NgxEchartsModule} from "ngx-echarts";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MatButtonModule} from "@angular/material/button";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true,
};

@NgModule({
  declarations: [PostTableComponent, PostChartsComponent],
    imports: [
        CommonModule,
        Exercise1RoutingModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        SharedComponentsModule,
        PerfectScrollbarModule,
        MatButtonModule
    ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ]
})
export class Exercise1Module { }
