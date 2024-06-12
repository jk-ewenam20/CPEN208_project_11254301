-- CREATE SCHEMA student_and_lecturer_mis;

-- CREATE TABLE student_and_lecturer_mis.student_info_tb(
-- 	student_id BIGSERIAL PRIMARY KEY,
-- 	st_fName text,
-- 	st_Lname text,
-- 	st_other_names text,
-- 	email varchar,
-- 	phone text,
-- 	address text,
-- 	d_o_b date
-- )

-- CREATE TABLE student_and_lecturer_mis.student_finance_tb(
-- 	id BIGSERIAL PRIMARY KEY,
-- 	student_id BIGSERIAL,
-- 	allocated_fees INTEGER,
-- 	debit_amount INTEGER,
-- 	balance INTEGER GENERATED ALWAYS AS (debit_amount - allocated_fees) STORED,
	
-- 	FOREIGN KEY(student_id) REFERENCES student_and_lecturer_mis.student_info_tb(student_id)
-- );


-- CREATE TABLE student_and_lecturer_mis.courses_tb(
-- 	course_code VARCHAR PRIMARY KEY,
-- 	course_title TEXT,
-- 	credits INTEGER
-- )

-- CREATE TABLE student_and_lecturer_mis.st_reg_course(
-- 	registration_id BIGSERIAL PRIMARY KEY,
-- 	student_id BIGSERIAL,
-- 	course_code VARCHAR,
	
-- 	FOREIGN KEY(student_id) REFERENCES student_and_lecturer_mis.student_info_tb(student_id)
-- )

-- CREATE TABLE student_and_lecturer_mis.lecturer_course_tb(
-- 	lecturer_id BIGSERIAL PRIMARY KEY,
-- 	lecturer_name TEXT,
-- 	email VARCHAR,
-- 	course_code VARCHAR,
-- 	TA_name TEXT,
	
-- 	FOREIGN KEY(course_code) REFERENCES student_and_lecturer_mis.courses_tb(course_code)
-- )


-- CREATE OR REPLACE FUNCTION student_and_lecturer_mis.select_st_reg_course(
-- 	)
--     RETURNS text
--     LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE PARALLEL UNSAFE
-- AS $BODY$
-- DECLARE 
--     json_result_obj TEXT DEFAULT '';
-- BEGIN
--       json_result_obj= json_build_object('success',true,'data',array_to_json(array_agg(row_to_json(t))))
--  from (SELECT * FROM student_and_lecturer_mis.student_info_tb RIGHT JOIN student_and_lecturer_mis.st_reg_course ON student_and_lecturer_mis.student_info_tb.student_id = student_and_lecturer_mis.st_reg_course.student_id FULL OUTER JOIN student_and_lecturer_mis.courses_tb ON student_and_lecturer_mis.st_reg_course.course_code = student_and_lecturer_mis.courses_tb.course_code WHERE student_and_lecturer_mis.student_info_tb.email = ':email') t;
-- IF  json_result_obj IS NULL THEN
--      json_result_obj = json_build_object('success',false,'msg','Error Loading Data');
-- END IF;
--   RETURN json_result_obj;
-- END;
-- $BODY$



-- CREATE TABLE student_and_lecturer_mis.lecturer_course_tb(
-- 	lecturer_id BIGSERIAL PRIMARY KEY,
-- 	lecturer_name TEXT,
-- 	email VARCHAR,
-- 	course_code VARCHAR,
-- 	TA_name TEXT,
	
-- 	FOREIGN KEY(course_code) REFERENCES student_and_lecturer_mis.courses_tb(course_code)
-- )


-- CREATE OR REPLACE FUNCTION student_and_lecturer_mis.select_st_fin_info(
-- 	)
--     RETURNS text
--     LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE PARALLEL UNSAFE
-- AS $BODY$
-- DECLARE 
--     json_result_obj TEXT DEFAULT '';
-- BEGIN
--       json_result_obj= json_build_object('success',true,'data',array_to_json(array_agg(row_to_json(t))))
--  from (SELECT * FROM student_and_lecturer_mis.student_info_tb FULL OUTER JOIN student_and_lecturer_mis.student_finance_tb ON student_and_lecturer_mis.student_info_tb.student_id = student_and_lecturer_mis.student_finance_tb.student_id) t;
-- IF  json_result_obj IS NULL THEN
--      json_result_obj = json_build_object('success',false,'msg','Error Loading Data');
-- END IF;
--   RETURN json_result_obj;
-- END;
-- $BODY$;

-- CREATE OR REPLACE FUNCTION student_and_lecturer_mis.select_st_info(
-- 	)
--     RETURNS text
--     LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE PARALLEL UNSAFE
-- AS $BODY$
-- DECLARE 
--     json_result_obj TEXT DEFAULT '';
-- BEGIN
--       json_result_obj= json_build_object('success',true,'data',array_to_json(array_agg(row_to_json(t))))
--  from (SELECT * FROM student_and_lecturer_mis.student_info_tb FULL OUTER JOIN student_and_lecturer_mis.st_reg_course ON student_and_lecturer_mis.student_info_tb.student_id = student_and_lecturer_mis.st_reg_course.student_id) t;
-- IF  json_result_obj IS NULL THEN
--      json_result_obj = json_build_object('success',false,'msg','Error Loading Data');
-- END IF;
--   RETURN json_result_obj;
-- END;
-- $BODY$;

-- CREATE OR REPLACE FUNCTION student_and_lecturer_mis.select_all_courses(
-- 	)
--     RETURNS text
--     LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE PARALLEL UNSAFE
-- AS $BODY$
-- DECLARE 
--     json_result_obj TEXT DEFAULT '';
-- BEGIN
--       json_result_obj= json_build_object('success',true,'data',array_to_json(array_agg(row_to_json(t))))
--  from (SELECT * FROM student_and_lecturer_mis.courses_tb) t;
-- IF  json_result_obj IS NULL THEN
--      json_result_obj = json_build_object('success',false,'msg','Error Loading Data');
-- END IF;
--   RETURN json_result_obj;
-- END;
-- $BODY$;




