import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  private baseUrl = 'http://localhost:8080/api/employees/';

  constructor( private http: HttpClient ) { }

  public getEmployeesList() {
    return this.http.get(this.baseUrl);
  }
}
