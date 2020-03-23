import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkThemeEnable = new BehaviorSubject(false);
  constructor() { }
}
