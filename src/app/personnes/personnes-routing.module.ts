import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CandidatsComponent} from './candidats/candidats.component';
import {NewCandidatComponent} from './candidats/new-candidat/new-candidat.component';
import {FormateursComponent} from './formateurs/formateurs.component';
import {NewFormateurComponent} from './formateurs/new-formateur/new-formateur.component';
import {UsersComponent} from './users/users.component';
import {NewUserComponent} from './users/new-user/new-user.component';


const routes: Routes = [
  {path: 'candidat/new', component: NewCandidatComponent},
  {path: 'candidat/edit/:id', component: NewCandidatComponent},
  {path: 'candidat', component: CandidatsComponent},
  {path: 'formateur', component: FormateursComponent},
  {path: 'formateur/new', component: NewFormateurComponent},
  {path: 'formateur/edit/:id', component: NewFormateurComponent},
  {path: 'user', component: UsersComponent},
  {path: 'user/new', component: NewUserComponent},
  {path: 'user/edit/:id', component: NewUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnesRoutingModule {
}
