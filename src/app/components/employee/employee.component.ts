import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  EmployeeForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.EmployeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: [new Date(), Validators.required],
      role: ['', Validators.required],
      phoneNo: this.formBuilder.array([new FormControl()]),
      gender: ['', Validators.required],
    });
  }

  get phoneNo() {
    return this.EmployeeForm.controls['phoneNo'] as FormArray;
  }

  addPhoneNo() {
    (this.EmployeeForm.get('phoneNo') as FormArray).push(new FormControl());
  }

  deletePhoneNo(i: number) {
    this.phoneNo.removeAt(i);
  }
  submit() {
    if (this.EmployeeForm.valid) {
      this.empService.addEmp(this.EmployeeForm.value);
      let employeeList = this.empService.getEmp();
      localStorage.setItem('user', JSON.stringify(employeeList));
      this.router.navigate(['emplist']);
    } else {
      alert('Not a valid form');
    }
    this.EmployeeForm.reset();
  }
}
