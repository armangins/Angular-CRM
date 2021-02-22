import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from './../../services/employees-service.service';
import { faUsers, faMapMarked,} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  page_icon:string;
  page_title:string;
  usersIcon = faUsers;
  locationIcon = faMapMarked;
  firstName:string;
  employees: Employee[];
  employeesOrigin:Employee[];

  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.page_icon = 'fas fa-users';
    this.page_title = 'Employees';
    this.employeeService.getEmployees().subscribe(employee=>{
    this.employees = this.employeesOrigin = employee;
  });
    
  }

  showTools(event){    
     event.target.children[0].children[0].style.cssText = 'visibility:  visible !important'
  }

  hideTools(event){
     event.target.children[0].children[0].style.cssText = 'visibility: hidden !important'
}

onDelete(id,event){
  event.preventDefault();
  if(confirm('Sure?')){
    this.employeeService.deleteEmployee(id)
  }
}

onSearch(field) {
  let searchField = this[field].toLowerCase();
  if (searchField.length > 0) {
    this.employees = this.employeesOrigin.filter(data => _.includes(data[field].toLowerCase(), searchField));
  } else {
    this.employees = this.employeesOrigin;
  }
}
}