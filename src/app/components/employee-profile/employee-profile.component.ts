import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../services/employees-service.service';



@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  userId;
  employee:Employee ={

    firstName:'',
    lastName:'',
    email:'',
    address:'',
    phone:'',
    status:'',
    position:'',
    joined:'',
    birth:'',
  

  
  }
  constructor(private router:Router, private employeeService: EmployeeService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

 
this.userId = this.activedRoute.snapshot.params['id']
    this.employeeService.getEmployee(this.userId).subscribe((employee)=>{

      this.employee = employee
      
    })
    


    
  }

}
