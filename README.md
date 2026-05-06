# Task Manager Application

A full-stack task management application built with Node.js (Express), MongoDB, and React.

## Features
- **Authentication**: User signup and login with JWT.
- **Task Management**: Create, read, update (toggle status), and delete tasks.
- **Filtering**: Filter tasks by status (All, Pending, Completed).
- **Pagination**: Client-side pagination for better task navigation.
- **Responsive UI**: Built with Tailwind CSS.

---

## Local Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud URI)

### 1. Clone the Repository
```bash
git clone https://github.com/RushabhJadhav/fullstack-assigment
cd fullstack-assignment
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_super_secret_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## API Documentation

### Authentication Endpoints
All authentication endpoints are prefixed with `/api/auth`.

| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/signup` | Create a new user account | `{ "email": "user@example.com", "password": "password123" }` |
| `POST` | `/login` | Authenticate user and get token | `{ "email": "user@example.com", "password": "password123" }` |

### Task Endpoints
All task endpoints require a valid JWT in the `Authorization` header and are prefixed with `/api/tasks`.

**Header:** `Authorization: Bearer <your_token>`

| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieve all tasks for the user | None |
| `POST` | `/` | Create a new task | `{ "title": "New Task", "description": "Details..." }` |
| `PATCH` | `/:id` | Update task (status or content) | `{ "status": "completed" }` |
| `DELETE` | `/:id` | Delete a task | None |

---

## Technical Choices
- **Frontend**: React (Vanilla JS), Axios, Context API, Tailwind CSS.
- **Backend**: Node.js, Express, Mongoose, JWT, Bcrypt.
- **Database**: MongoDB.

---

## Notes
- Ensure MongoDB is running before starting the backend server.
- The `JWT_SECRET` in `.env` can be any string for local development.
- The `bcrypt` and `jsonwebtoken` packages are required for the backend authentication logic.
