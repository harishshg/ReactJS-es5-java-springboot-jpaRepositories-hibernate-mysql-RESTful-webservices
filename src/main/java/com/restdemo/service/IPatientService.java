package com.restdemo.service;

import com.restdemo.Entity.Patient;

public interface IPatientService {

	Patient getPatient(long id);

	Patient save(Patient p);
}
