# NODEJS-JWT-EXAMPLE
This project is a sample implementation of an authentication system that uses JSON Web Token to manage users' login data in Node.js web server.

Express.js, Mongoose, ES6 Syntax is used in this project.

Tutorial on this project is available at https://velopert.com/2448 (KOREAN)

## Getting Started
### Prerequisites
- node.js 16.13.x
- npm 7.5.6
- MongoDB 3.0

### Installing & Configuration
1) Install dependencies
```
npm install
```

### Run the server
```
nodemon
```

## APIs
### Auth Route
#### Register
`POST /api/user`
```
{
user:{  
    firstName,
    lastName,
    email,
    username,
    password
}
}

## License
[MIT License](http://opensource.org/licenses/MIT).  
Copyright (c) 2016 [velopert](https://www.velopert.com/).
