import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';

const route: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'emplist', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
