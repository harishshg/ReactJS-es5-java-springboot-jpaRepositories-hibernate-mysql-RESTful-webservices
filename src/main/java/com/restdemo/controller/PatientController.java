package com.restdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.restdemo.Entity.Patient;
import com.restdemo.service.IPatientService;

@RestController
public class PatientController {
	
	@Autowired
	IPatientService patientService;
	
	@RequestMapping(value="/patient/{id}",method=RequestMethod.GET)
	public Patient getPatient(@PathVariable long id){
		
		return patientService.getPatient(id);
	}
	
	@RequestMapping(value="/patients",method=RequestMethod.GET)
	public List<Patient> getPatients(){
		
		return patientService.getPatients();
	}
	
	@RequestMapping(value="/patient",method=RequestMethod.POST)
	public Patient savePatient(@RequestBody Patient p){
		
		
		//service call
		return patientService.save(p);
	}

}
