# MERN Authentication Starter

This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vitejs.dev/) Build tool. This authentication buil from learning [JWT auth](https://jwt.io/)


<img width="990" alt="screen" src="https://github.com/pattjoshi/MERN_Auth_jwt/assets/78966839/0d015682-c859-400d-a87e-0eabfea41ef0">


### It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- **JWT authentication stored in HTTP-only cookie**
- Protected routes and endpoints
- Custom middleware to check **JSON web token** and store in cookie
- Custom error middleware
- React frontend to **register, login, logout, view profile, and update profile**
- React **Bootstrap** UI library
- State management **React redux**
- React **Toastify** notifications

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)


### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'opop909027'
```

Change the JWT_SECRET to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

# Project Description:

### Express & MongoDB Backend API with React Frontend redux

- This project involves the development of a full-stack application using **Express** as the backend API framework and **MongoDB** as the database, along with a React frontend. The goal is to **implement authentication, registration, profile management, and error handling features.** Additionally, the **React Bootstrap** UI library and React T**oastify** notifications will be used for an enhanced user interface.

- The backend API, built with Express, will handle HTTP requests and manage the application's data. MongoDB will be used to store and retrieve user information. The API will provide routes for authentication, logout, registration, profile management, and profile updating.

- Authentication will be implemented using JSON Web Tokens (JWT) stored in HTTP-only cookies, ensuring a secure authentication process. Custom middleware will be used to validate the JWT and protect the routes and endpoints.

- Custom error middleware will handle any errors that occur during API execution, providing appropriate responses to the client.

- The React frontend will offer a user-friendly interface with components designed using the React Bootstrap UI library. Users will be able to register, log in, log out, view their profile, and update their profile information.

- State management in the application is implemented using Redux Toolkit, which provides a predictable state container for managing the application's data.

- React Toastify notifications will be integrated to provide real-time feedback, displaying messages for successful actions, error messages, and other relevant information.

- In summary, this project will deliver a secure and user-friendly full-stack application with Express, MongoDB, React, React Bootstrap,redux-toolKit and React Toastify. It will include authentication, registration, profile management, and error handling features.






## YouTub :- [I Learn from this ](https://www.youtube.com/watch?v=R4AhvYORZRY&t=7363s "click to open")

🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
