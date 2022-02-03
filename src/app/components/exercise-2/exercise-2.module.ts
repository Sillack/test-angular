import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise2RoutingModule } from './exercise-2-routing.module';
import {NgxEchartsModule} from "ngx-echarts";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {BarsChartsComponent} from "./bars-chart/bars-charts.component";
import {RegionFilterPipe} from "../../shared/pipes/region-filter.pipe";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [BarsChartsComponent, RegionFilterPipe],
    imports: [
        CommonModule,
        Exercise2RoutingModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        SharedComponentsModule,
        FormsModule,
        MatButtonModule
    ],
  providers: [],
  exports: [
    RegionFilterPipe
  ]
})
export class Exercise2Module { }
