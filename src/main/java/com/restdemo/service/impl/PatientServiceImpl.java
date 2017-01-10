package com.restdemo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restdemo.Entity.Patient;
import com.restdemo.dao.IPatientRepository;
import com.restdemo.service.IPatientService;

@Service
public class PatientServiceImpl implements IPatientService{
	
	@Autowired
	IPatientRepository patientRepository;

	@Override
	public Patient getPatient(long id) {
		return patientRepository.findOne(id);
	}

	@Override
	public Patient save(Patient p) {
		
		return patientRepository.save(p);
	}

}
