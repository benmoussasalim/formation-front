import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FeaturesRoutingModule} from './features-routing.module';
import {FormationsComponent} from './formations/formations.component';
import { NewFormationComponent } from './formations/new-formation/new-formation.component';
import { CandidatFormationComponent } from './formations/candidat-formation/candidat-formation.component';


// @ts-ignore
@NgModule({
  declarations: [
    FormationsComponent,
    NewFormationComponent,
    CandidatFormationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule

  ]
})
export class FeaturesModule {
}
