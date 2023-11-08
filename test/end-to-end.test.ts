import e from 'express';
import {PuppeteerStudent, Student} from '../src/interfaces/Student';
import {testTableStructure} from './indexTests';
import {testPostingStudent} from './postTests';
import {getStudents} from './studentTests';
import randomstring from 'randomstring';
const serverUrl = 'http://localhost:3000';

describe('Table structure', () => {
  test('should post new student', async () => {
    const student: PuppeteerStudent = {
      student_name: 'Test ' + randomstring.generate(7),
      filename: 'cat.jpg',
    };
    await testPostingStudent(serverUrl, student);
  }, 20000);

  test('should have correct structure', async () => {
    const data: Student[] = await getStudents(serverUrl);
    await testTableStructure(serverUrl, data);
  }, 16000);
});
