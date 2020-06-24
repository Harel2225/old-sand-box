import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
title = {
  title: 'Lesson3'
};
message = {
  serviceMessage: 'The boss say: ' + this.getMessegeFromService(),
};
  constructor(private service: AppService) { }

  ngOnInit() {
  }
  getMessegeFromService() {
    return this.service.getMessage();
  }
}
