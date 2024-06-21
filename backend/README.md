# Backend for Authentication App

This is the backend part of the Authentication App built with Go, Gin, Gorm, and PostgreSQL. It includes endpoints for user registration, login, activation, password reset, and profile management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [License](#license)

## Installation

1. Install the dependencies:

    ```bash
    go mod download
    ```

3. Set up PostgreSQL and create a database.

4. Apply the migrations (if any).

## Usage

1. Run the application:

    ```bash
    go run .
    ```

2. The server will start on `http://localhost:8080`.


## Project Structure

The project structure is as follows:
```go
backend/
├── config/
│ ├── config.go
├── controllers/
│ ├── authController.go
├── middleware/
│ ├── authMiddleware.go
├── models/
│ ├── user.go
├── routes/
│ ├── routes.go
├── utils/
│ ├── utils.go
├── .env
└── auth.db
└── docker-compose.yml
└── Dockerfile
├── main.go
├── go.mod
└── go.sum
```


## Environment Variables

Create a `.env` file in the root directory with the following content:
```bash
PORT=8080
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```


## Endpoints

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user
- `POST /auth/forgot-password`: Initiate password reset
- `POST /auth/reset-password`: Reset password
- `POST /auth/activate-account`: Activate user account
- `GET /profile`: Get user profile (protected)
- `POST /profile/change-password`: Change password (protected)

## License

This project is licensed under the MIT License
