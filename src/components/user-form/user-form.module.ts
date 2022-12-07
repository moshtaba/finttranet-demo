import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { UserFormRoutingModule } from './user-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    CardModule
  ]
})
export class UserFormModule { }
