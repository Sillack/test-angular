import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExercisesComponent} from "./exercises.component";

const routes: Routes = [
  {
    path: '',
    component: ExercisesComponent
  },
  {
        path: 'exercise-1',
        loadChildren: () =>
          import('./exercise-1/exercise-1.module').then((m) => m.Exercise1Module),
  },
  {
        path: 'exercise-2',
        loadChildren: () =>
            import('./exercise-2/exercise-2.module').then((m) => m.Exercise2Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
