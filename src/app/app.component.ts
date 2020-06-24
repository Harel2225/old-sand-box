import { Component } from '@angular/core';

export interface INav {
  path: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs: INav[] = [
  { path: 'home', label: 'My EPR' },
  { path: 'list', label: 'Employees' },
  { path: 'editor', label: 'The Boss' },
  ];

title = 'sand-box';
}
