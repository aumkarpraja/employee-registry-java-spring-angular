import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { EmployeesService } from '../employee/employees.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent implements OnInit {

  @Output() public onEmployeeInfoSelect: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() public onEmployeeUpdateSelect: EventEmitter<Employee> = new EventEmitter<Employee>();

  public employees: Employee[];

  constructor( private employeeService: EmployeeService, private employeesService: EmployeesService ) { }

  public ngOnInit() {
    this.reloadData();
  }

  public reloadData(){
    this.employeesService.getEmployeesList().subscribe(employees => {
      this.employees = employees as Employee[];
    });
  }

  public deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.reloadData();
    });
  }

  public getEmployeeInformation(employee: Employee){
    this.onEmployeeInfoSelect.emit(employee);
  }

  public updateEmployee(employee: Employee){
    this.onEmployeeUpdateSelect.emit(employee);
  }

}
