import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'exercises', pathMatch: 'full' },
      {
        path: 'exercises',
        loadChildren: () =>
          import('./components/exercises.module').then((m) => m.ExercisesModule),
      },
  { path: '**', redirectTo: 'exercises' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
