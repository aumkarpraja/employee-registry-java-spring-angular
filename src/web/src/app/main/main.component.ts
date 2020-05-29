import { Component } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  public employee: Employee;
  public display = 'employee-list';

  constructor() { }

  public openEmployeeUpdate(employee: Employee){
    this.employee = employee;
    this.display = 'employee-update';
  }

  public openEmployeeInfo(employee: Employee){
    this.employee = employee;
    this.display = 'employee-info';
  }

}
