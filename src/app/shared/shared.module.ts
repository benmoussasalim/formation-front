import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzButtonModule, NzDatePickerModule,
  NzIconModule,
  NzInputNumberModule,
  NzModalModule,
  NzPopconfirmModule,
  NzPopoverModule, NzRadioModule, NzSelectModule, NzSwitchModule,
  NzTableModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ], exports: [
    NzButtonModule,
    NzTableModule,
    NzIconModule,
    NzPopoverModule,
    NzModalModule,
    FormsModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzRadioModule,
    NzSelectModule,
    NzSwitchModule
  ]
})
export class SharedModule { }
