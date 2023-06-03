# MERN Authentication Starter

This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vitejs.dev/) Build tool. This authentication buil from learning [JWT auth](https://jwt.io/)


<img width="990" alt="screen" src="https://github.com/pattjoshi/MERN_Auth_jwt/assets/78966839/0d015682-c859-400d-a87e-0eabfea41ef0">


### It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register, login, logout, view profile, and update profile
- React Bootstrap UI library
- React Toastify notifications

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

## YouTub :- [I Learn from this ](https://www.youtube.com/watch?v=R4AhvYORZRY&t=7363s "click to open")

🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)












