import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormationsComponent} from './formations/formations.component';
import {NewFormationComponent} from './formations/new-formation/new-formation.component';
import {CandidatFormationComponent} from './formations/candidat-formation/candidat-formation.component';

const routes: Routes = [
  {path: 'formation/new', component: NewFormationComponent},
  {path: 'formation/edit/:id', component: NewFormationComponent},
  {path: 'formation', component: FormationsComponent},
  {path: 'formation/affect', component: CandidatFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
