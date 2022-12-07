import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { UploadImageRoutingModule } from './upload-image-routing.module';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    FileUploadModule,
    CardModule
  ]
})
export class UploadImageModule { }
