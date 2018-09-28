import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// @vendors
import {StoreModule} from '@ngrx/store';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
// @Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { JobTitleComponent } from './job-title/job-title.component';
// @reducer
import { reducer } from './reducers/employee.reducer';
import {reducerId} from './reducers/employeeId.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
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
