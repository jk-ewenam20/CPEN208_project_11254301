package com.jkektech.ses_sms_backend.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private Long student_id;
    private String firstName;
    private String lastName;
    private String other_names;
    private String email;
    private String phone;
    private String d_o_b;
    private String address;
    private String password;
}
