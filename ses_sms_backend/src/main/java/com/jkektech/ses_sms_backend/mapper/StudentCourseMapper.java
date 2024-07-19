package com.jkektech.ses_sms_backend.mapper;

import com.jkektech.ses_sms_backend.dto.StudentCourseDto;
import com.jkektech.ses_sms_backend.entity.StudentCourses;


public class StudentCourseMapper {

    public static StudentCourseDto mapToStudentCourseDto(StudentCourses courses) {
        return new StudentCourseDto(
                courses.getRegistration_id(),
                courses.getStudent_id(),
                courses.getCourse_code(),
                courses.getCourse_title(),
                courses.getCredits()
        );
    }


    public static StudentCourses mapToCourses(StudentCourseDto studentCourseDto) {
        return new StudentCourses(
                studentCourseDto.getRegistration_id(),
                studentCourseDto.getStudent_id(),
                studentCourseDto.getCourse_code(),
                studentCourseDto.getCourse_title(),
                studentCourseDto.getCredits()
        );
    }
}
