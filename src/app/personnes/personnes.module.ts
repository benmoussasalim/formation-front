import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CandidatsComponent} from './candidats/candidats.component';
import {CommonModule} from '@angular/common';
import {PersonnesRoutingModule} from './personnes-routing.module';
import {NewCandidatComponent} from './candidats/new-candidat/new-candidat.component';
import {FormateursComponent} from './formateurs/formateurs.component';
import {NewFormateurComponent} from './formateurs/new-formateur/new-formateur.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/new-user/new-user.component';


// @ts-ignore
@NgModule({
  declarations: [
    CandidatsComponent,
    NewCandidatComponent,
    FormateursComponent,
    NewFormateurComponent,
    UsersComponent,
    NewUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonnesRoutingModule

  ]
})
export class PersonnesModule {
}
