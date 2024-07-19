package com.jkektech.ses_sms_backend.service.implementations;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jkektech.ses_sms_backend.dto.StudentDto;
import com.jkektech.ses_sms_backend.entity.Student;
import com.jkektech.ses_sms_backend.exception.ResourceNotFoundException;
import com.jkektech.ses_sms_backend.mapper.StudentMapper;
import com.jkektech.ses_sms_backend.repository.StudentInfoRepository;
import com.jkektech.ses_sms_backend.service.StudentService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService{
    private StudentInfoRepository studentInfoRepository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentInfoRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }
    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentInfoRepository.findById(studentId)
            .orElseThrow(() -> 
                new ResourceNotFoundException("Student does not exist with given id: " + studentId));
        return StudentMapper.mapToStudentDto(student);
    }
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentInfoRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
            .collect(Collectors.toList());
    }
    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentInfoRepository.findById(studentId).orElseThrow(
            () -> new ResourceNotFoundException("Student with the provided id: " + studentId + "does not exist")
        );

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setOther_names(updatedStudent.getOther_names());
        student.setAddress(updatedStudent.getAddress());
        student.setEmail(updatedStudent.getEmail());
        student.setPhone(updatedStudent.getPhone());
        student.setD_o_b(updatedStudent.getD_o_b());
        student.setPassword(updatedStudent.getPassword());

        Student updatedStudentInfo = studentInfoRepository.save(student);
        return StudentMapper.mapToStudentDto(updatedStudentInfo);
    }

}
