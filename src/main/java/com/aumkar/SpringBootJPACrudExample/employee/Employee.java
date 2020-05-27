package com.aumkar.SpringBootJPACrudExample.employee;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table( name = "employees" )
public class Employee{

	@Id
	@Column
	@GeneratedValue( strategy = GenerationType.AUTO )
	private UUID id;

	@Column
	private String firstName;

	@Column
	private String lastName;

	@Column
	private String email;

	public Employee( String firstName, String lastName, String email ){
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public UUID getId(){
		return id;
	}

	public void setId( UUID id ){
		this.id = id;
	}

	public String getFirstName(){
		return firstName;
	}

	public void setFirstName( String firstName ){
		this.firstName = firstName;
	}

	public String getLastName(){
		return lastName;
	}

	public void setLastName( String lastName ){
		this.lastName = lastName;
	}

	public String getEmail(){
		return email;
	}

	public void setEmail( String email ){
		this.email = email;
	}
}
