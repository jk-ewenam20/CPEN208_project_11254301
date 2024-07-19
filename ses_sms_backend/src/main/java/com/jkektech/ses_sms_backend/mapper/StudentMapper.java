package com.jkektech.ses_sms_backend.mapper;

import com.jkektech.ses_sms_backend.dto.StudentDto;
import com.jkektech.ses_sms_backend.entity.Student;

public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student) {
        return new StudentDto(
                student.getStudent_id(),
                student.getFirstName(),
                student.getLastName(),
                student.getOther_names(),
                student.getEmail(),
                student.getPhone(),
                student.getD_o_b(),
                student.getAddress(),
                student.getPassword()
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        return new Student(
                studentDto.getStudent_id(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getOther_names(),
                studentDto.getEmail(),
                studentDto.getPhone(),
                studentDto.getD_o_b(),
                studentDto.getAddress(),
                studentDto.getPassword()

        );
    }

}
