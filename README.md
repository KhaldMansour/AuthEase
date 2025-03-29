# AuthEase

## Overview

This project implements a user authentication module with sign-up, sign-in, and a protected application page. The front-end is built using **React (Next.js)** with **TypeScript**, and the back-end is implemented using **NestJS** with **MongoDB** for database integration.

The application allows users to sign up with validated fields, sign in securely, and view a protected page with a welcome message. The application follows industry best practices for both front-end and back-end development, with a focus on security, modularity, and maintainability.

Additionally, **Docker Compose** is used to manage the containerized environment, and **Swagger** is integrated for API documentation available at `http://localhost:4000/api/docs`.

### Bonus Points Achieved:
- **Swagger Documentation**: All backend APIs are documented using **Swagger**, accessible at `http://localhost:4000/api/docs#`.
- **Unit and Integration Tests**: Comprehensive tests have been added for the back-end to ensure reliability and correctness.
- **Pipelines (GitHub Actions)**: CI pipelines have been set up to run tests and linting automatically on every push or pull request.
- **Linting**: **ESLint** and **Prettier** are used to ensure high-quality and consistent code across both front-end and back-end.
- **TypeScript for Backend and Frontend**: Both the front-end (React) and back-end (NestJS) are built using **TypeScript**, providing enhanced type safety and better developer experience.
- **Error Handling**: Error handling is implemented using response interceptors in the back-end, ensuring consistent error responses for unexpected issues.
- **Best Practices in Code**: Best practices such as modularization, separation of concerns, SOLID principles, and proper validation/sanitization of user inputs are followed throughout the application.
- **Logout Feature**: A secure **logout** feature has been implemented to ensure users can safely end their session.

These features ensure that the application is production-ready, maintainable, and adheres to modern development practices.

Additionally, **Docker Compose** is used to manage the containerized environment, and **Swagger** is integrated for API documentation available at `localhost:4000/api/docs`.

## Front-End Development

### Technologies Used
- **React (Next.js)**
- **TypeScript**

### Features
- **Sign-up Page:**
  - **Email**: Validates that the email is in the correct format.
  - **Name**: (First & Last) Minimum length of 3 characters.
  - **Password**:
    - Minimum length of 8 characters.
    - At least one letter.
    - At least one number.
    - At least one special character.

- **Sign-in Page:**
  - **Email**: Email address input.
  - **Password**: Password input for authentication.

- **Application Page:**
  - A welcome message: "Welcome to the application."
  - Optional logout button to end the session.
  - you can find the page through `http://localhost:3000/`

### Development Instructions
1. Clone the repository:

```bash
    git clone git@github.com:KhaldMansour/AuthEase.git
    cd AuthEase
```

2. Run docker compose:
```bash
    docker compose up --build
```


