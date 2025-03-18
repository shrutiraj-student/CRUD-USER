📌 Overview
This RESTful API provides basic CRUD (Create, Read, Update, Delete) operations for managing users. The API is built using Node.js and Express.js, with data storage in MongoDB/SQLite.
🚀 Features
Create a user (name, email, age).
Retrieve all users.
Retrieve a user by ID.
Update a user’s details.
Delete a user from the database.
JSON-based responses.
Proper error handling.


🛠 Tech Stack
Node.js - JavaScript runtime environment
Express.js - Web framework for Node.js
MongoDB / SQLite - Database for storing users
Postman - API testing tool
Nodemon - Auto uodate and run server
Dotenv - for hardcord important and sencetive information
Mongoose - As a translator betwwen our backend and mongodb database

🔧 Installation & Setup
Install all dependencies as in package .json - npm install
To run - npm run dev
DATABASE_URL = 'mongodb://localhost:27017/Zylentrix'
database name - Zylentrix and collection name User


📌 API Endpoints
✍️FOR POST REQUEST USE METHOD POST
REQUEST - ROUTE - localhost:3000/api/post 
In Body pass -
{
  "name": "sita",
  "email": "sita1@gmail.com",
  "age": 20
} 
RESPONSE - 
{
    "message": "new user created successfully",
    "data": {
        "name": "sita",
        "email": "sita1@gmail.com",
        "age": 20,
        "createdAt": "2025-03-18T17:49:57.039Z",
        "updatedAt": "2025-03-18T17:49:57.039Z",
        "_id": "67d9b2483865c1a082c5df92",
        "__v": 0
    }
}

✍️FOR GET REQUEST USE METHOD GET all users
REQUEST - ROUTE - localhost:3000/api/get
RESPONSE - 
{
"message": "get all user",
    "data": [
        {
            "_id": "67d9a5f2ed47eefc5ae8e345",
            "name": "sita",
            "email": "sita1@gmail.com",
            "createdAt": "2025-03-18T16:55:10.719Z",
            "updatedAt": "2025-03-18T17:10:30.346Z",
            "__v": 0,
            "age": 20
        }
}

✍️FOR GET REQUEST USE METHOD GET for a particular user with help of ID
REQUEST - ROUTE - localhost:3000/api/get/67d9a5f2ed47eefc5ae8e345
RESPONSE - 
{
"message": "get user by id",
    "data": [
        {
            "_id": "67d9a5f2ed47eefc5ae8e345",
            "name": "sita",
            "email": "sita1@gmail.com",
            "createdAt": "2025-03-18T16:55:10.719Z",
            "updatedAt": "2025-03-18T17:10:30.346Z",
            "__v": 0,
            "age": 20
        }
}

✍️FOR UPDATE REQUEST USE METHOD PUT for a particular user with help of ID
REQUEST - ROUTE - localhost:3000/api/put/67d9a5f2ed47eefc5ae8e345
In request body 
{
  "name": "sita",
  "email": "sita123@gmail.com",
  "age": 25
} 

RESPONSE - 
{
    "success": true,
    "message": "User updated successfully",
    "data": {
        "_id": "67d9a5f2ed47eefc5ae8e345",
        "name": "sita",
        "email": "sita123@gmail.com",
        "createdAt": "2025-03-18T16:55:10.719Z",
        "updatedAt": "2025-03-18T17:10:30.346Z",
        "__v": 0,
        "age": 25
    }
}
✍️FOR DELETE REQUEST USE METHOD DELETE for a particular user with help of ID
REQUEST - ROUTE - localhost:3000/api/delete/67d9a5f2ed47eefc5ae8e345
RESPONSE - 
{
    "success": true,
    "message": "User deleted successfully",
    "data": {
        "_id": "67d9a5f2ed47eefc5ae8e345",
        "name": "sita",
        "email": "sita1@gmail.com",
        "createdAt": "2025-03-18T16:55:10.719Z",
        "updatedAt": "2025-03-18T17:57:36.646Z",
        "__v": 0,
        "age": 20
    }
}









