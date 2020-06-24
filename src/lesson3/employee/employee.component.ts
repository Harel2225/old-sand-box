import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  // employee: IEmployee; <== old
  title = {
    firstname: 'first name',
    lastname: 'last name',
    email: 'email',
  };
  btn = {
    show: 'Show'
  };
  @Input() employee: IEmployee;
  @Output() edit = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnInit() {
    console.log(
      'Hello Employee',
      this.employee.firstname);
  }
  // onClick() {
  //   this.edit.emit(this.employee);
  // }

  print(e) {
    console.log(e);

  }
  onClick(employee: IEmployee) {
    console.log('click', this.employee.id);
    this.edit.emit(employee);
  }
}
