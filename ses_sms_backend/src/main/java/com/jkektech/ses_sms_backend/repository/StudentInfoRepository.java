package com.jkektech.ses_sms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jkektech.ses_sms_backend.entity.Student;

public interface StudentInfoRepository extends JpaRepository<Student, Long>{

}
