package com.jkektech.ses_sms_backend.models;

import org.hibernate.type.descriptor.jdbc.LongVarcharJdbcType;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class courses {
    public Connection con = null;

    public String select_all_courses() {
        String result = null;
        String SQL = "SELECT * FROM student_and_lecturer_mis.select_all_courses()";
        Connection conn = con;
        try {

            PreparedStatement pstmt = conn.prepareStatement(SQL);
            ResultSet response = pstmt.executeQuery();
            while (response.next()) {
                result = response.getString("select_all_courses");
            }
        } catch (SQLException e) {
            // Print Errors in console.
            System.out.println(e.getMessage());
        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return result;
    }

//    public String add_course(String json_request) {
//        String result = null;
//        String SQL = "SELECT * FROM student_and_lecturer_mis.add_course(?)";
//        Connection conn = con;
//        try {
//
//            PreparedStatement pstmt = conn.prepareStatement(SQL);
//            pstmt.setString(1, json_request);
//            ResultSet rs = pstmt.executeQuery();
//            while (rs.next()) {
//                result = rs.getString("add_course");
//            }
//        } catch (SQLException e) {
//            // Print Errors in console.
//            System.out.println(e.getMessage());
//        } finally {
//            if (conn != null) {
//                try {
//                    conn.close();
//                } catch (SQLException ex) {
//                    ex.printStackTrace();
//                }
//            }
//        }
//        return result;
//    }
//
//    public String get_student_and_course(Long student_id) {
//        String result = null;
//        String SQL = "SELECT * FROM student_and_lecturer_mis.select_st_reg_course(?)";
//        Connection conn = con;
//        try {
//
//            PreparedStatement pstmt = conn.prepareStatement(SQL);
//            pstmt.setString(1, String.valueOf(student_id));
//            ResultSet rs = pstmt.executeQuery();
//            while (rs.next()) {
//                result = rs.getString("select_st_reg_course");
//            }
//        } catch (SQLException e) {
//            // Print Errors in console.
//            System.out.println(e.getMessage());
//        } finally {
//            if (conn != null) {
//                try {
//                    conn.close();
//                } catch (SQLException ex) {
//                    ex.printStackTrace();
//                }
//            }
//        }
//        return result;
//    }

}