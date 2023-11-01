import {RowDataPacket} from 'mysql2';

type MySQLDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

interface Student {
  student_id: number;
  student_name: string;
  filename: string;
  birthdate: MySQLDate;
}

interface GetStudent extends RowDataPacket, Student {}

type PostStudent = Omit<Student, 'student_id'>;

type PutStudent = Partial<PostStudent>;

export {Student, GetStudent, PostStudent, PutStudent};
