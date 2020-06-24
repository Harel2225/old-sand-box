import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
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
