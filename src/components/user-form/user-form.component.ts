import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService, AppState } from 'src/services/app.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  form = this.fb.group({
    amount: ['', Validators.required],
    date: ['', Validators.required],
    status: [null, Validators.required],
    source: ['', Validators.pattern('[ a-zA-Z]*')]
  });

  options = ['option1', 'option2', 'option3', 'option4'];

  minDate = new Date();

  maxDate = new Date();

  appState: AppState;

  submit = false;

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.maxDate = new Date(this.maxDate.setDate(this.maxDate.getDate() + 5));
    this.appState = this.appService.filan.getValue();

    if(this.appState.form){
      this.form.setValue(this.appState.form);
    }
  }

  nextPage() {
    this.submit = true;
    if(this.form.valid){
      this.appService.filan.next({...this.appState, form: this.form.value});

      this.router.navigate(['select-table']);
    }
  }

  prevPage() {
      this.router.navigate(['upload-image']);
  }
}
