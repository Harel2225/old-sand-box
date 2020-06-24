import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../employee/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { getTestBed } from '@angular/core/testing';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = {
    title: 'Employee works!'
  };
  message = {
    serviceMessage: 'The boss say: ' + this.getMessegeFromService(),
  };
  @Input() employee: IEmployee;
  constructor(private router: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('id', id);
      this.employee = this.getEmployeeToCard(Number(id));
      // const message = this.getMessegeFromService();
    });
  }
  getEmployeeToCard(id: number): IEmployee {
    return this.service.getEmployee(id);
  }
  getMessegeFromService() {
    return this.service.getMessage();
  }
}
