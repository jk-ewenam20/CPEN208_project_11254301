package com.jkektech.ses_sms_backend.service.implementations;


import com.jkektech.ses_sms_backend.connections.db_settings;
import com.jkektech.ses_sms_backend.models.Financial_info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student_finance")
public class Finance_services {

    Financial_info fin_info = new Financial_info();

    @Autowired
    private db_settings cls_db_config;

    @GetMapping("{id}")
    public String student_and_courses(@PathVariable("id") long res_student_id){
        fin_info.con = cls_db_config.getCon();
        String result = fin_info.get_student_and_financial_info(res_student_id);
        return result;
    }

}
