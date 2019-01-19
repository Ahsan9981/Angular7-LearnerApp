import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMessage}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}} - {{employee.name}} : {{employee.age}} </li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  errorMessage: string;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    
    this._employeeService.getEmployees().subscribe(response => {
      this.employees = response;
    }, 
    error => { 
      this.errorMessage = error;
    });
  }

}
