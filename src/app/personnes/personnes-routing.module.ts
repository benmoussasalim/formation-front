import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CandidatsComponent} from './candidats/candidats.component';
import {NewCandidatComponent} from './candidats/new-candidat/new-candidat.component';


const routes: Routes = [
  {path: 'candidat/new', component: NewCandidatComponent},
  {path: 'candidat', component: CandidatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnesRoutingModule {
}
