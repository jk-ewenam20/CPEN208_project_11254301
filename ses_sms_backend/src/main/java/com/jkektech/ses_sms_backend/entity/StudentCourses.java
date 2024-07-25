package com.jkektech.ses_sms_backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="st_reg_course")
public class StudentCourses {
    @Id
    private Long registration_id;

    @Column(name = "student_id")
    private String student_id;

    @Column(name = "course_code")
    private String course_code;

    @Column(name = "course_title")
    private String course_title;

    @Column(name = "credits")
    private Long credits;
}

