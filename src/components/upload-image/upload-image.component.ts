import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppService, AppState } from 'src/services/app.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  imageControl = new FormControl(null, [Validators.required]);

  appState: AppState;

  url: any;

  submit = false;

  constructor(private router: Router, public messageService: MessageService, private appService: AppService) {
    this.appState = this.appService.filan.getValue();

    if(this.appState.image){
      this.imageControl.setValue(this.appState.image);
      this.setUrl(this.appState.image);
    }
  }

  onBasicUpload(event: any) {
    let file = event.files[0];
    this.appService.filan.next({...this.appState, image: file});

    if(file){
      this.setUrl(file);

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});  
    }
  }

  private setUrl(file: any){
    const reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }

  nextPage() {
    this.submit = true;
    if(this.imageControl.valid){
      this.router.navigate(['user-form']);
    }
  }
}
