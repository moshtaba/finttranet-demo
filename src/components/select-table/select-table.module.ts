import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTableComponent } from './select-table.component';
import { SelectTableRoutingModule } from './select-table-routing.module';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    SelectTableComponent
  ],
  imports: [
    CommonModule,
    SelectTableRoutingModule,
    TableModule,
    ButtonModule,
    CardModule
  ]
})
export class SelectTableModule { }
