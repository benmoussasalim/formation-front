import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {fr_FR, NZ_I18N} from 'ng-zorro-antd/i18n';
import fr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {SimpleNotificationsModule} from 'angular2-notifications';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [{provide: NZ_I18N, useValue: fr_FR}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
