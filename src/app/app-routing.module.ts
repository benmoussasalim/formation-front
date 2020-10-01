import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {
    path: 'app',
    loadChildren: () =>
      import('./layouts/layouts.module').then(m => m.LayoutsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
