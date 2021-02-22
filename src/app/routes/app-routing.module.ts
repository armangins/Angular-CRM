import { AuthGuard } from './../guard/auth-guard.guard';

import { EditEmployeeComponent } from './../components/edit-employee/edit-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { EmployeesComponent } from './../components/employees/employees.component';
import { ContactsComponent } from './../components/contacts/contacts.component';
import { LoginComponent } from './../components/login/login.component';
import { AddEmployeeComponent } from './../components/add-employee/add-employee.component';
import { EmployeeProfileComponent } from './../components/employee-profile/employee-profile.component';

// routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'employees' ,pathMatch:'full'},
  { path: 'employees', component: EmployeesComponent ,canActivate:[AuthGuard]},
  { path: 'employees/new-employee',component: AddEmployeeComponent,canActivate:[AuthGuard]},
  { path: 'employee/:id', component: EmployeeProfileComponent,canActivate:[AuthGuard]},
  { path: 'employee/edit/:id', component: EditEmployeeComponent,canActivate:[AuthGuard]},
  { path:'contacts', component: ContactsComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  exports: [RouterModule],
  declarations: [],

  imports: [
  
  CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
