package com.jkektech.ses_sms_backend.service;

import java.util.List;

import com.jkektech.ses_sms_backend.dto.StudentDto;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById(Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);
}
