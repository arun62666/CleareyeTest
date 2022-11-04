import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  EmployeeList: string = '';
  EmployeeLists: Employee[] = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      let emp = JSON.parse(localStorage.getItem('user') || '');
      this.EmployeeLists = emp;
    }

    console.log(this.EmployeeLists);
  }
}
