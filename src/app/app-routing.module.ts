import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'upload-image',
    pathMatch: 'full'
  },
  { 
    path: 'upload-image',
    loadChildren: () => import('../components/upload-image/upload-image.module').then(m => m.UploadImageModule)
  },
  { 
    path: 'user-form',
    loadChildren: () => import('../components/user-form/user-form.module').then(m => m.UserFormModule)
  },
  { 
    path: 'select-table',
    loadChildren: () => import('../components/select-table/select-table.module').then(m => m.SelectTableModule)
  },
  { 
    path: 'summary',
    loadChildren: () => import('../components/summary/summary.module').then(m => m.SummaryModule)
  },
  { 
    path: 'complete',
    loadChildren: () => import('../components/complete/complete.module').then(m => m.CompleteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
