/**
 * @api {get} /api/v1/students List all students
 * @apiName GetStudents
 * @apiGroup Students
 *
 * @apiSuccess {Object[]} students List of students.
 * @apiSuccess {Number} students.student_id Student's unique ID.
 * @apiSuccess {String} students.student_name Student's name.
 * @apiSuccess {String} students.filename Student's image filename.
 * @apiSuccess {Date} students.birthdate Student's birthdate (YYYY-MM-DD).
 *
 *  @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "student_id":11,
 *       "student_name":"Seppo",
 *       "filename":"3d58580f8c2442cd0452ff75ffff0972",
 *       "birthdate":"1975-12-13T22:00:00.000Z"
 *     }
 *   ]
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {post} /api/v1/students Create a new student
 * @apiName CreateStudent
 * @apiGroup Students
 *
 * @apiDescription Create a new student using a multipart/form-data request. Include student_name and birthdate fields.
 *
 * @apiParam {String} student_name Student's name.
 * @apiParam {Date} birthdate Student's birthdate (YYYY-MM-DD).
 * @apiParam {File} filename Student's image. Type: image/jpeg, image/png, image/gif.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student created successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "Invalid value: student_name, Invalid value: birthdate"
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "file not valid"
 *   }
 */

/**
 * @api {get} /api/v1/students/:id Get a student by ID
 * @apiName GetStudent
 * @apiGroup Students
 *
 * @apiParam {Number} id Student's unique ID.
 *
 * @apiSuccess {Object} student Student object.
 * @apiSuccess {Number} student.student_id Student's unique ID.
 * @apiSuccess {String} student.student_name Student's name.
 * @apiSuccess {String} student.filename Student's image filename.
 * @apiSuccess {Date} student.birthdate Student's birthdate (YYYY-MM-DD).
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "student_id":11,
 *     "student_name":"Seppo",
 *     "filename":"3d58580f8c2442cd0452ff75ffff0972",
 *     "birthdate":"1975-12-13T22:00:00.000Z"
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {put} /api/v1/students/:id Update a student by ID
 * @apiName UpdateStudent
 * @apiGroup Students
 *
 * @apiDescription Update a student using a JSON request (Content-Type: application/json).
 *
 * @apiParam {Number} id Student's unique ID.
 * @apiParam {String} [student_name] Updated student's name.
 * @apiParam {Date} [birthdate] Updated student's birthdate (YYYY-MM-DD).
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student updated successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "Invalid value: student_name, Invalid value: birthdate"
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "No students updated"
 *   }
 */

/**
 * @api {delete} /api/v1/students/:id Delete a student by ID
 * @apiName DeleteStudent
 * @apiGroup Students
 *
 * @apiParam {Number} id Student's unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student deleted successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {get} /uploads/:filename Get an uploaded file
 * @apiName GetFile
 * @apiGroup Uploads
 *
 * @apiParam {String} filename File name to retrieve.
 *
 * @apiSuccess {File} file Retrieved file.
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "File not found"
 *   }
 */
