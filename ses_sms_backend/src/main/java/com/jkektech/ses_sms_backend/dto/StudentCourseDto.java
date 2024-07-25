package com.jkektech.ses_sms_backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentCourseDto {

    private Long registration_id;
    private String student_id;
    private String course_code;
    private String course_title;
    private Long credits;
}
