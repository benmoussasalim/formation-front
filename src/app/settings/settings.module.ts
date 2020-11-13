import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SalleComponent } from './salle/salle.component';
import { ThemeComponent } from './theme/theme.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [SalleComponent, ThemeComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,

  ]
})
export class SettingsModule { }
