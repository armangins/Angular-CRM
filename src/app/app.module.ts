import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms'
import { PageTitleComponent } from './components/page-title/page-title.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    FooterComponent,
    EmployeesComponent,
    ContactsComponent,
    LoginComponent,
    PageTitleComponent,
    AddEmployeeComponent,
    EmployeeProfileComponent,
    EditEmployeeComponent
    
  ],
  imports: [

    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
