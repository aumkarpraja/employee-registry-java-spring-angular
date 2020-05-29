import { Component } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  public employee: Employee = new Employee();
  public submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  public save() {
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      this.employee = new Employee();
      this.router.navigate(['/index']);
    });
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
  }

}
