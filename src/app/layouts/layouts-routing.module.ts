import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullComponent} from './full/full.component';


const routes: Routes = [

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'personnes',
        loadChildren: () =>
          import('../personnes/personnes.module').then(m => m.PersonnesModule)
      },
      {
        path: 'features',
        loadChildren: () =>
          import('../features/features.module').then(m => m.FeaturesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
