package com.jkektech.ses_sms_backend.service;


import com.jkektech.ses_sms_backend.connections.db_settings;
import com.jkektech.ses_sms_backend.models.courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/all_courses")
public class courses_service {

    courses course_l = new courses();

    @Autowired
    private db_settings cls_db_config;

    @GetMapping("/list_of_courses")
    public String list_of_courses(){
        course_l.con = cls_db_config.getCon();
        String result = course_l.select_all_courses();
        return result;
    }

}
