import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeIndex = 0;
  items: MenuItem[] = [
    {
      label: 'Upload Image',
      routerLink: 'upload-image',
      command: () => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Complete Form',
      routerLink: 'user-form',
      command: () => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Select One',
      routerLink: 'select-table',
      command: () => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Summary',
      routerLink: 'summary',
      command: () => {
        this.activeIndex = 3;
      }
    },
    {
      label: 'Complete',
      routerLink: 'complete',
      command: () => {
        this.activeIndex = 4;
      }
    }
  ];

  constructor(private router: Router, private primengConfig: PrimeNGConfig) {
    this.router.navigate(['upload-image']);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
