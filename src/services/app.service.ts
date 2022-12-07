import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class AppState {
    image: any;
    form: any;
    user: any;
}

@Injectable({
    providedIn: "root"
})
export class AppService {
    constructor(){
        console.log('created')
    }
    state = new Observable();
    filan = new BehaviorSubject<AppState>(new AppState());
}