import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from "../employee/employee";

@Component({
  selector: 'employee-information',
  templateUrl: './employee-information.component.html'
})
export class EmployeeInformationComponent {
  @Input() public employee: Employee;
  @Output() public onEmployeeInfoClose: EventEmitter<any> = new EventEmitter<any>();

  public id: number;

  constructor() { }

  public closeEmployeeInfo(){
    this.onEmployeeInfoClose.emit();
  }
}
