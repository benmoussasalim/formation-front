import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CandidatsComponent} from './candidats/candidats.component';
import {CommonModule} from '@angular/common';
import {PersonnesRoutingModule} from './personnes-routing.module';
import {NewCandidatComponent} from './candidats/new-candidat/new-candidat.component';


// @ts-ignore
@NgModule({
  declarations: [CandidatsComponent,
    NewCandidatComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonnesRoutingModule

  ]
})
export class PersonnesModule {
}
