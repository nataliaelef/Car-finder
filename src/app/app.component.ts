import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { NavigationComponent } from './shared/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Friday';

  constructor() { }

}
