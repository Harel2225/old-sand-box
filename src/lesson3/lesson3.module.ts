import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Lesson3RoutingModule } from './lesson3-routing.module';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './editor/editor.component';

@NgModule({
        declarations: [HomeComponent, ListComponent, EmployeeComponent, CardComponent, EditorComponent],
        imports: [Lesson3RoutingModule, CommonModule, HttpClientModule],
        exports: [],
})
export class Lesson3Module { }

