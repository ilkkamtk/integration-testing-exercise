/* eslint-disable @typescript-eslint/no-unused-vars */
import {NextFunction, Request, Response} from 'express';
import ErrorResponse from './interfaces/ErrorResponse';
import CustomError from './classes/CustomError';
import {Student} from './interfaces/Student';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(`🔍 - Not Found - ${req.originalUrl}`, 404);
  next(error);
};

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/students');
    const students = (await response.json()) as Student[];
    console.log('getStudents', students);
    res.locals.students = students;
    next();
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export {notFound, errorHandler, getStudents};
