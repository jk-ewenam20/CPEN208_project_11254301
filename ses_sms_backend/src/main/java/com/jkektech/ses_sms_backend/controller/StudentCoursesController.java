package com.jkektech.ses_sms_backend.controller;

import com.jkektech.ses_sms_backend.dto.StudentCourseDto;
import com.jkektech.ses_sms_backend.entity.StudentCourses;
import com.jkektech.ses_sms_backend.service.StudentCourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/api/st_reg_courses")
public class StudentCoursesController {
    private StudentCourseService studentCourseService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<StudentCourseDto> studentAddCourse(@ModelAttribute StudentCourseDto studentCourseDto) {
        StudentCourseDto savedStudentCourse = studentCourseService.studentAddCourse(studentCourseDto);
        return new ResponseEntity<>(savedStudentCourse, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    public List<StudentCourses> studentCourses(@PathVariable("id") String studentId) {
        return this.studentCourseService.studentGetCourse(studentId);
    }

}
