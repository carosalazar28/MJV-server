# MJV

MJV is a JavaScript API REST with NodeJs to create read updates and delete users

## Installation

Get the code you can clone the project with

```bash
git clone https://github.com/carosalazar28/MJV-client.git
```

## Usage

## Routes
You can use https://mjv-db.herokuapp.com and the next url's

```bash
/sign-up   POST
/sign-in   POST
/          GET     Middleware auth
/          PUT     Middleware auth
/          DELETE  Middleware auth
```

Also, you can run the project on your local server

```bash
yarn start
```

## Features developed

### User model
The model has the next properties:

- name
- email
- password
- lastname
- rolDeveloper
- job

### User Controller
The controller has the next method's:

- signup
- signin
- show
- update
- destroy

### Middleware
- Middleware for create a token with JsonWebToken to save the user-id


### Linter to normalize the project with esLint, Prettier, and EditorConfig
- Files with config

## Environmental Variables

The project has environmental variables for connect with the database, deploy in local port, and a secret message for use JWT

```
PORT
MONGO_URI
SECRET
```
## Build with 🛠️
The tools for developing the project was

Expressjs - Web application infrastructure with Nodejs
Nodejs - JavaScript runtime
Mongo - Most popular non-SQL database
Mongoose - ODM for the database


## Author ✒️
Carolina Salazar - FrontEnd Developer - [carosalazar28](https://github.com/carosalazar28)

## License
[MIT](https://choosealicense.com/licenses/mit/)
