import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalleComponent} from './salle/salle.component';
import {ThemeComponent} from './theme/theme.component';


const routes: Routes = [
  {path: 'salle', component: SalleComponent},
  {path: 'theme', component: ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
