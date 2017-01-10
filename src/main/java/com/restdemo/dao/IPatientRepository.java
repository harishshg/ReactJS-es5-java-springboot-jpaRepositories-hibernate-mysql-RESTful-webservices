package com.restdemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restdemo.Entity.Patient;

public interface IPatientRepository  extends JpaRepository<Patient, Long>{

}
