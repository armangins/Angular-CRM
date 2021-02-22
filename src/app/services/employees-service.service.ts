import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesCollection: AngularFirestoreCollection<Employee>;
  employeeDoc: AngularFirestoreDocument<Employee>;
  employees: Observable<Employee[]>;
  employee: Observable<Employee>;

  constructor(private fireStore: AngularFirestore) {
    this.employeesCollection = this.fireStore.collection('employees', ref => ref.orderBy('lastName', 'asc'));
  }

  getEmployees(): Observable<Employee[]> {
    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Employee;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    return this.employees;
  }


  addEmployee(employee: Employee) {
    this.employeesCollection.add(employee);
  }

  getEmployee(id: string): Observable<Employee> {
    this.employeeDoc = this.fireStore.doc<Employee>(`employees/${id}`);
    this.employee = this.employeeDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Employee;
          data.id = action.payload.id;
          return data;
        }
      })
  
      
    );
    console.log('works');
    return this.employee;
  }

  updateEmployee(employee: Employee) {
    console.log('updating');
    
    this.employeeDoc = this.fireStore.doc(`employees/${employee.id}`);
    this.employeeDoc.update(employee);
  }

  deleteEmployee(Id) {
 
  
    this.employeeDoc = this.fireStore.doc(`employees/${Id}`);
    this.employeeDoc.delete();
  }

}