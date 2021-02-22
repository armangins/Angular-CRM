
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from './../../services/employees-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
  page_title:string;
  page_icon:string;

  firstName:string;
  lastName:string;
  dateOfBirth:string;
  phone:string;
  email:string;
  address:string;
  position:string;
  joinedOn:string;
  status:string;
 
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
  
    this.page_title = 'New Employee';
    this.page_icon = 'fas fa-user-plus'

  }
   onSubmit({valid, value}:{valid: boolean, value:Employee}){
 
     if(valid){
    this.employeeService.addEmployee(value);
    this.router.navigate(['/employees']);

   }
}


}
