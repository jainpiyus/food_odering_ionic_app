import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit, AfterViewInit {

  darkTheme: boolean
  themeModel: any;
  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.themeService.darkThemeEnable.subscribe(res => {
      this.darkTheme = res;
      this.setTheme();
    });
  }
  setTheme() {
    if (this.darkTheme) {
      this.themeModel = "dark";
    } else {
      this.themeModel = "light";
    }
  }

  selectTheme(e) {
    if (e.detail.value === "dark" && !this.darkTheme) {
      this.themeService.darkThemeEnable.next(true);
    } 
    if (e.detail.value === "light" && this.darkTheme){
      this.themeService.darkThemeEnable.next(false);
    }
  }

}
