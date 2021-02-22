import { EmployeeService } from './../../services/employees-service.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  page_title:string;
  page_icon:string;

  employeeId;
  employee: Employee ={

    firstName:'',
    lastName:'',
    birth:'',
    phone:'',
    email:'',
    address:'',
    position:'',
    joined:'',
    status:'',
  

  }

  constructor(private EmployeeService:EmployeeService,
    private router: Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.activeRoute.snapshot.params['id'];
    
    this.EmployeeService.getEmployee(this.employeeId).subscribe(employee=>{
      
      this.employee = employee;
      console.log(this.employee);
      
      
    })
    
    this.page_title = 'Edit Employee';
    this.page_icon = 'fas fa-user-edit'
  }

  onSubmit({valid, value}:{valid: boolean, value:Employee}){

    if(valid){

      value.id = this.employeeId;
      this.EmployeeService.updateEmployee(value)
      this.router.navigate(['/employees'])

    }
  }

}
