import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, AppState } from 'src/services/app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  appState: AppState;
  url: any;

  constructor(private router: Router, private appService: AppService) {
    this.appState = this.appService.filan.getValue();
    console.log(this.appState);
    if(this.appState.image){
      console.log(this.appState.image)
      const reader = new FileReader();
      reader.readAsDataURL(this.appState.image); 
      reader.onload = (_event) => { 
          this.url = reader.result; 
      }
    }

  }

  nextPage() {
    if(this.appState.form && this.appState.image && this.appState.user){
      this.router.navigate(['complete']);
    }
  }

  prevPage() {
      this.router.navigate(['select-table']);
  }
}
