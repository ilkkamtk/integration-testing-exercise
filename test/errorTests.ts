// test error for some random url, should return 404
const getNotFound = (url: string | Function) => {
  return new Promise((resolve, reject) => {
    request(url)
      .get('/what-is-this')
      .expect(404, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.body);
        }
      });
  });
};

// TODO: getSingleStudentError. Should generate error for student not found, should return 404

// TODO: postStudentFileError. Should generate 400 error for student not added because of missing file
// Also error message needs to be correct.

// TODO: postStudentNameError. Should generate 400 error for student not added because of missing student_name
// Also error message needs to be correct.

// TODO: fileNotFoundError. Should generate 404 error for file not found

export {
  getNotFound,
  getSingleStudentError,
  postStudentFileError,
  postStudentNameError,
  fileNotFoundError,
};
