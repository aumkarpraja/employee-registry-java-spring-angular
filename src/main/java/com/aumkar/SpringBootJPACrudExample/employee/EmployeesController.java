package com.aumkar.SpringBootJPACrudExample.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin( origins = "http://localhost:4200")
@RestController
@RequestMapping( "/employees" )
public class EmployeesController{

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping( "" )
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
}
