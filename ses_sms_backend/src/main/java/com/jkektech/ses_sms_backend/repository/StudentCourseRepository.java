package com.jkektech.ses_sms_backend.repository;

import com.jkektech.ses_sms_backend.entity.StudentCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentCourseRepository extends JpaRepository<StudentCourses, String> {

    @Query(value = "SELECT * FROM st_reg_course WHERE student_id=?", nativeQuery = true)
    List<StudentCourses> findStudentCourses(String studentId);
}