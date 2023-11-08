# REST API integration testing and end-to-end testing.

### API Documentation (APIDoc)

The API you'll be testing has documentation that describes its endpoints and expected behavior Refer to the APIDoc to know what each endpoint should do and what the expected responses are.

### Testing Scenarios

Your assignment consists of two main parts: testing successful API responses and testing error handling. The test cases for both scenarios are provided in the test folder.

#### 1. Testing Successful Responses

In the test folder, you will find test files with TODO comments for different API endpoints. Your task is to complete these tests by following the provided TODOs. These tests aim to ensure that the API responds correctly when everything goes smoothly.

#### 2. Testing Error Handling

Similarly, in the test folder, you will find test files with TODO comments for error scenarios. Your goal is to complete these tests to validate that the API handles errors appropriately. The error tests cover various situations, including 404 errors, validation errors, and more.

#### 3. End-to-End tests

Also, in the test folder, you will find test files with TODO comments for end-to-end tests. Your goal is to test that the font page in `index.ejs` HTML has correct `<table>` structure (in comments) and that students can be uploaded with the form in `post.ejs`.

## How to run

1. Set up database. Go to https://amme.metropolia.fi/mysql to set database password. DO NOT USE OMA PASSWORD FOR DATABASE. If you already have done it, skip this step.
2. Go to https://users.metropolia.fi/phpMyAdmin and login with your database password you made in step 1.
3. Go to SQL tab and run this query: https://gist.github.com/ilkkamtk/5ee689673e4717003561e29bef92d170
4. Now you should have table 'students' in your database.
5. Clone this repo and open the folder in VSCode
6. Put your username and database password to `.env_sample`. Rename `.env_sample` to `.env`
7. You need to use Metropolia VPN so your app can access the database server.
8. Install dependencies: `npm i`
9. Run app `npm run dev`
10. Open postman and import [this](students.postman_collection.json) collection to try the app.

### NPM libraries needed for testing (Dev dependencies)

- jest
- ts-jest
- supertest
- randomstring
