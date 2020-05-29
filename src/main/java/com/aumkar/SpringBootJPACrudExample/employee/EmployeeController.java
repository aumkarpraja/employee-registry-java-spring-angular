package com.aumkar.SpringBootJPACrudExample.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@CrossOrigin( origins = "http://localhost:4200")
@RestController
@RequestMapping( "/employee" )
public class EmployeeController{

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping( "{id}" )
	public ResponseEntity<Employee> getEmployeeById( @PathVariable( value = "id" ) long employeeId ){
		Optional<Employee> employee = employeeRepository.findById( employeeId );

		if( !employee.isPresent() ){
			throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Employee not found!" );
		}

		return ResponseEntity.ok().body( employee.get() );
	}

	@PostMapping( "" )
	public Employee createEmployee( @RequestBody Employee employee ){
		return employeeRepository.save( employee );
	}

	@PutMapping( "{id}" )
	public ResponseEntity<Employee> updateEmployee( @PathVariable( value = "id" ) long employeeId, @RequestBody Employee employee ){
		Optional<Employee> optionalEmployee = employeeRepository.findById( employeeId );

		if( !optionalEmployee.isPresent() ){
			throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Employee not found!" );
		}

		Employee employeeToUpdate = optionalEmployee.get();
		employeeToUpdate.setFirstName( employee.getFirstName() );
		employeeToUpdate.setLastName( employee.getFirstName() );
		employeeToUpdate.setEmail( employee.getEmail() );

		Employee updatedEmployee = employeeRepository.save( employee );

		return ResponseEntity.ok( updatedEmployee );
	}

	@DeleteMapping( "{id}" )
	public boolean deleteEmployee( @PathVariable( value = "id" ) long employeeId ){

		Optional<Employee> optionalEmployee = employeeRepository.findById( employeeId );

		if( !optionalEmployee.isPresent() ){
			throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Employee not found!" );
		}

		Employee employee = optionalEmployee.get();
		employeeRepository.delete( employee );

		return true;
	}
}
