import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// @Vendors
import {StoreModule} from '@ngrx/store';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
// @Components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { JobTitleComponent } from './components/job-title/job-title.component';
// @Routing
import { AppRoutingModule } from './app-routing.module';
// @Reducers
import { reducer } from './reducers/employee.reducer';
import {reducerId} from './reducers/employeeId.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    ViewEmployeeComponent,
    JobTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      employee: reducer,
      employeeId: reducerId
    }),
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
