package com.jkektech.ses_sms_backend.service.implementations;

import com.jkektech.ses_sms_backend.dto.StudentCourseDto;
import com.jkektech.ses_sms_backend.entity.StudentCourses;
import com.jkektech.ses_sms_backend.mapper.StudentCourseMapper;
import com.jkektech.ses_sms_backend.repository.StudentCourseRepository;
import com.jkektech.ses_sms_backend.service.StudentCourseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {
    private StudentCourseRepository studentCourseRepository;

    @Override
    public StudentCourseDto studentAddCourse(StudentCourseDto studentCourseDto) {
        StudentCourses courses = StudentCourseMapper.mapToCourses(studentCourseDto);
        StudentCourses savedStudentCourse = studentCourseRepository.save(courses);
        return StudentCourseMapper.mapToStudentCourseDto(savedStudentCourse);
    }

    @Override
    public List<StudentCourses> studentGetCourse(Long studentId) {

        return (List<StudentCourses>) studentCourseRepository.findStudentCourses(studentId);
    }
}
