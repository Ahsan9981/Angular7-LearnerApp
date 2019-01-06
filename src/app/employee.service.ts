import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): any {
    return [
      {'id': 1, 'name':'John', 'age':30},
      {'id': 2, 'name':'Lee', 'age':26},
      {'id': 3, 'name':'Mark', 'age':32},
      {'id': 4, 'name':'Tyson', 'age':28},
    ];
  }
}
