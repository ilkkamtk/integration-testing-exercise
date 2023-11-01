import {
  addStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from '../models/studentModel';
import {Request, Response, NextFunction} from 'express';
import {Student, PostStudent, PutStudent} from '../../interfaces/Student';
import CustomError from '../../classes/CustomError';
import {validationResult} from 'express-validator';
import MessageResponse from '../../interfaces/MessageResponse';
import fs from 'fs';

const studentListGet = async (
  _req: Request,
  res: Response<Student[]>,
  next: NextFunction
) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    next(error);
  }
};

const studentGet = async (
  req: Request,
  res: Response<Student>,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages: string = errors
      .array()
      .map((error) => `${error.msg}: ${error.param}`)
      .join(', ');
    next(new CustomError(messages, 400));
    return;
  }

  try {
    const student = await getStudent(req.params.id);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

const studentPost = async (
  req: Request<{}, PostStudent>,
  res: Response<MessageResponse>,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages: string = errors
        .array()
        .map((error) => `${error.msg}: ${error.param}`)
        .join(', ');
      next(new CustomError(messages, 400));
      return;
    }

    if (!req.file) {
      const err = new CustomError('file not valid', 400);
      throw err;
    }

    const student = req.body;
    student.filename = req.file.filename;

    const id = await addStudent(student);
    const message: MessageResponse = {
      message: 'student added',
      id: id,
    };
    res.json(message);
  } catch (error) {
    next(error);
  }
};

const studentPut = async (
  req: Request<{id: string}, PutStudent>,
  res: Response<MessageResponse>,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages: string = errors
      .array()
      .map((error) => `${error.msg}: ${error.param}`)
      .join(', ');
    next(new CustomError(messages, 400));
    return;
  }

  try {
    const id = parseInt(req.params.id);
    const student = req.body;
    const result = await updateStudent(student, id);
    if (result) {
      const message: MessageResponse = {
        message: 'item updated',
        id,
      };
      res.json(message);
    }
  } catch (error) {
    next(error);
  }
};

const studentDelete = async (
  req: Request<{id: string}>,
  res: Response<MessageResponse>,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages: string = errors
      .array()
      .map((error) => `${error.msg}: ${error.param}`)
      .join(', ');
    next(new CustomError(messages, 400));
    return;
  }

  try {
    const id = parseInt(req.params.id);
    // delete file from uploads
    const student = await getStudent(req.params.id);
    const path = `./uploads/${student.filename}`;
    fs.unlink(path, (error) => {
      if (error) {
        next(error);
        return;
      }
    });

    const result = await deleteStudent(id);
    if (result) {
      const message: MessageResponse = {
        message: 'student deleted',
        id,
      };
      res.json(message);
    }
  } catch (error) {
    next(error);
  }
};

export {studentListGet, studentGet, studentPost, studentPut, studentDelete};
