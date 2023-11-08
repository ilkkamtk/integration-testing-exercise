import puppeteer from 'puppeteer';
import {Student} from '../src/interfaces/Student';

// function should test that table has correct structure:
/*
<table>
  <tbody>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Birthdate</th>
      <th>Image</th>
    </tr>
      
    <tr>
      <td>
          Student ID
      </td>
      <td>
          Student name
      </td>
      <td>
          Student birthdate
      </td>
      <td><img src="/uploads/student_filename" alt="Student image"></td>
    </tr>
  </tbody>
</table>
*/

const testTableStructure = async (url: string, data: Student[]) => {
  // TODO: implement this function
};

export {testTableStructure};
