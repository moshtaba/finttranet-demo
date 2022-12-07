import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTableComponent } from './select-table.component';

const routes: Routes = [
  { 
    path: '',
    component: SelectTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTableRoutingModule { }
