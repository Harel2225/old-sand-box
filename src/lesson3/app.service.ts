import { Injectable } from '@angular/core';
import { IEmployee } from './employee/employee.model';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentEmpluyee: IEmployee;
  version = '1.1.0';
  message = 'Hey-Ya!';

  public employees: IEmployee[] = [
    {
      id: 0,
      email: 'yonatan@yaltman.com',
      firstname: 'yonatan',
      lastname: 'yaltman',
    },
    {
      id: 1,
      email: 'maayan@yaltman.com',
      firstname: 'maayan',
      lastname: 'yaltman',
    },
    {
      id: 2,
      email: 'harry@yaltman.com',
      firstname: 'harry',
      lastname: 'harry',
    },
  ];

  constructor(private http: HttpClient) {
  }

  public getEmployee(thisId: number): IEmployee {
    return this.employees.find(({ id }) => id === thisId);
  }
  public getMessage() {
    return this.message;
  }
}

