package com.restdemo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Patient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	long id;
	String name;
	int age;
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	String desease;
	
	public String getDesease() {
		return desease;
	}
	public void setDesease(String desease) {
		this.desease = desease;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + "]";
	}
	


}
