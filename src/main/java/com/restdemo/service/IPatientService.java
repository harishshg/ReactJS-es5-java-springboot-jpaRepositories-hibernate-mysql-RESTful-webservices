package com.restdemo.service;

import java.util.List;

import com.restdemo.Entity.Patient;

public interface IPatientService {

	Patient getPatient(long id);

	Patient save(Patient p);

	List<Patient> getPatients();
}
