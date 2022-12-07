import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, AppState } from 'src/services/app.service';

interface User {
  id: number,
  name: string,
  role: 'admin' | 'customer' | 'employee'
}

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent {
  users: User[] = [
    {id: 1, name: 'John Lennon', role: 'customer'},
    {id: 2, name: 'Thom Yorke', role: 'admin'},
    {id: 3, name: 'Elvis Presley', role: 'customer'},
    {id: 4, name: 'Kurt Cobain', role: 'customer'},
    {id: 5, name: 'Nicolas Jaar', role: 'employee'},
    {id: 6, name: 'Kendrick Lamar', role: 'customer'},
    {id: 7, name: 'Travis Scott', role: 'customer'},
    {id: 8, name: 'Ryan Karazija', role: 'employee'},
    {id: 9, name: 'Mac Miller', role: 'admin'},
  ];

  selectedUser: User | null = null;

  appState: AppState;

  submit = false;

  constructor(private router: Router, private appService: AppService) {
      this.appState = this.appService.filan.getValue();
      this.selectedUser = this.appState.user || null;  
  }

  onRowSelect(event: any) {
      this.appService.filan.next({...this.appState, user: event.data})
  }

  nextPage() {
    this.submit = true;
    if(this.selectedUser){
      this.router.navigate(['summary']);
    }
  }

  prevPage() {
      this.router.navigate(['user-form']);
  }
}
