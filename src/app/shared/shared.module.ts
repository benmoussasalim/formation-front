import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzButtonModule, NzCardModule, NzCheckboxModule, NzDatePickerModule,
  NzIconModule,
  NzInputNumberModule,
  NzModalModule,
  NzPopconfirmModule,
  NzPopoverModule, NzRadioModule, NzSelectModule, NzSwitchModule,
  NzTableModule, NzTransferModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {NzSpaceModule} from 'ng-zorro-antd/space';


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
    NzSwitchModule,
    NzTransferModule,
    NzSpaceModule,
    NzCardModule,
    NzCheckboxModule
  ]
})
export class SharedModule { }
