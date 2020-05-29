import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from "../employee/employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent {
  @Input() public employee: Employee;
  @Output() public onEmployeeInfoClose: EventEmitter<any> = new EventEmitter<any>();

  public id: number;

  constructor() { }

  public closeEmployeeInfo(){
    this.onEmployeeInfoClose.emit();
  }
}
