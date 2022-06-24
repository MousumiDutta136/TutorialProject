import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WelcomeUserService {

  private nameSource = new BehaviorSubject<string>('');
  name = this.nameSource.asObservable()
  constructor() { }
  changeName(name: string) {
    this.nameSource.next(name);
  }
}
