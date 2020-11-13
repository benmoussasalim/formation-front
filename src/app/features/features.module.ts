import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FeaturesRoutingModule} from './features-routing.module';
import {FormationsComponent} from './formations/formations.component';
import { NewFormationComponent } from './formations/new-formation/new-formation.component';


// @ts-ignore
@NgModule({
  declarations: [
    FormationsComponent,
    NewFormationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule

  ]
})
export class FeaturesModule {
}
