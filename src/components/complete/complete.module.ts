import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteRoutingModule } from './complete-routing.module';
import { CompleteComponent } from './complete.component';

import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    CompleteComponent
  ],
  imports: [
    CommonModule,
    CompleteRoutingModule,
    CardModule
  ]
})
export class CompleteModule { }
