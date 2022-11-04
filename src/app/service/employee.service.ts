import { Injectable } from '@angular/core';
import { Employee } from '../common/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeList: Employee[] = [];
  constructor() {}

  addEmp(emp: Employee) {
    this.employeeList.push(emp);
  }

  getEmp() {
    return this.employeeList;
  }
}
