package com.jkektech.ses_sms_backend.service;

import com.jkektech.ses_sms_backend.dto.StudentCourseDto;
import com.jkektech.ses_sms_backend.entity.StudentCourses;

import java.util.List;

public interface StudentCourseService {
    StudentCourseDto studentAddCourse(StudentCourseDto studentCourseDto);

    List<StudentCourses> studentGetCourse(String studentId );
}