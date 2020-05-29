import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employee/';

  constructor(private httpClient: HttpClient) { }

  public getEmployee(id: number) {
    return this.httpClient.get(this.baseUrl + id)
  }

  public createEmployee(employee: Employee) {
    return this.httpClient.post(this.baseUrl, employee);
  }

  public updateEmployee(id: number, employee: Employee) {
    return this.httpClient.put(this.baseUrl, employee);
  }

  public deleteEmployee(id: number){
    return this.httpClient.delete(this.baseUrl + id);
  }
}
