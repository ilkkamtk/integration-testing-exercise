import {promisePool} from '../../utils/db';
import CustomError from '../../classes/CustomError';
import {ResultSetHeader} from 'mysql2';
import {
  Student,
  GetStudent,
  PostStudent,
  PutStudent,
} from '../../interfaces/Student';

const getAllStudents = async (): Promise<Student[]> => {
  const [rows] = await promisePool.execute<GetStudent[]>(
    'SELECT * FROM students;'
  );
  if (rows.length === 0) {
    throw new CustomError('No students found', 404);
  }

  return rows;
};

const getStudent = async (studentId: string): Promise<Student> => {
  const [rows] = await promisePool.execute<GetStudent[]>(
    `
    SELECT * FROM students
	  WHERE student_id = ?;
    `,
    [studentId]
  );
  if (rows.length === 0) {
    throw new CustomError('No students found', 404);
  }
  return rows[0];
};

const addStudent = async (data: PostStudent): Promise<number> => {
  const [headers] = await promisePool.execute<ResultSetHeader>(
    `
    INSERT INTO students (student_name, filename, birthdate) 
    VALUES (?, ?, ?)
    `,
    [data.student_name, data.filename, data.birthdate]
  );
  if (headers.affectedRows === 0) {
    throw new CustomError('No students added', 400);
  }
  return headers.insertId;
};

const updateStudent = async (
  data: PutStudent,
  id: number
): Promise<boolean> => {
  const sql = promisePool.format(
    'UPDATE students SET ? WHERE student_id = ?;',
    [data, id]
  );

  const [headers] = await promisePool.execute<ResultSetHeader>(sql);
  if (headers.affectedRows === 0) {
    throw new CustomError('No students updated', 400);
  }
  return true;
};

const deleteStudent = async (studentId: number): Promise<boolean> => {
  const [headers] = await promisePool.execute<ResultSetHeader>(
    `
    DELETE FROM students 
    WHERE student_id = ?;
    `,
    [studentId]
  );
  if (headers.affectedRows === 0) {
    throw new CustomError('No students deleted', 400);
  }
  return true;
};

export {getAllStudents, getStudent, addStudent, updateStudent, deleteStudent};
