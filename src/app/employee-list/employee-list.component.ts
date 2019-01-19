import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMessage}}</h3>
    <ul *ngFor="let employee of employees">
      <li> {{employee.name}} </li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

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
