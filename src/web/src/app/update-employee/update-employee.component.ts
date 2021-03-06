import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Employee } from "../employee/employee";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee/employee.service";

@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  @Input() public employee: Employee;
  @Output() public onEmployeeUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  public updateEmployee() {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      this.onEmployeeUpdate.emit();
    });
  }

  public onSubmit() {
    this.updateEmployee();
  }

}
