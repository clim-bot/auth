# Frontend for Authentication App

This is the frontend part of the Authentication App built with React and React Router DOM. It includes pages for login, registration, password reset, and profile management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes this tool and copies build dependencies, configuration files, and scripts into the app directory.

## Folder Structure

The project structure is as follows:
```js
frontend/
├── public/
│ ├── index.html
│
├── src/
│ ├── api/
│ │ └── auth.js
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ ├── ActivateAccount.js
│ │ │ ├── ForgotPassword.js
│ │ │ ├── ResetPassword.js
│ │ └── Profile/
│ │ ├── Profile.js
│ │ └── ChangePassword.js
│ ├── App.js
│ ├── index.js
│ ├── routes.js
│ ├── utils/
│ │ └── PrivateRoute.js
│ ├── styles/
│ └── styles.css
│
├── package.json
└── .env
```


## Environment Variables

Create a `.env` file in the root directory with the following content:

```bash
REACT_APP_API_URL=http://localhost:8080
```

## License

This project is licensed under the MIT License