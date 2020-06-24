import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEmployee } from '../employee/employee.model';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  message = {
    serviceMessage: 'The boss say: ' + this.getMessegeFromService(),
  };
  employeesList: IEmployee[];
  constructor(private router: Router, private service: AppService) {
    console.log('List Break😂');

  }
  onEmployeeEdit(employee: IEmployee) {
    console.log('edit', employee.id);
    const url = 'card/' + employee.id;
    this.router.navigate([url]);

  }
  ngOnInit() {
    this.employeesList = this.service.employees;
  }

  ngOnDestroy() {

  }
  getMessegeFromService() {
    return this.service.getMessage();
  }
}
