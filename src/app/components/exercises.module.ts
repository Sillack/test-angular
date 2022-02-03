import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import {ExercisesComponent} from "./exercises.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [ExercisesComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class ExercisesModule { }
