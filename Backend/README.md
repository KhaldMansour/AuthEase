# CurrencyFlow

## Overview

This is a RESTful API built using **Node.js** and **Nest.js** framework for a hypothetical finance application that offers currency exchange functionality. The API allows users to convert currency, register accounts, login, and view their transaction history. It integrates with an external currency exchange API to perform currency conversion. Additionally, **Swagger documentation** has been integrated for easy access and understanding of the available endpoints.

## Technology Stack

- **Backend Framework:** Nest.js (Node.js)
- **Database:** MongoDB
- **Authentication:** JWT-based authentication
- **Currency Exchange API:**  ExchangeRate-API
- **API Documentation:** Swagger

## Running Locally:
To run the application, follow these steps:

1. Clone the repository.
2. Ensure that you have docker and docker-compose locally.
3. In the root directory of the project run: 

```
 docker compose up
```
4. Configure the environment variables in the `.env` file with the appropriate credentials.

## API Endpoints

Swagger documentation is available at `/api/docs` after the application is running, providing an interactive UI to explore and test all available endpoints.

## Authentication

- The **JWT token** is required for accessing user-related endpoints like `/user/history`.
- The token is returned upon successful login and must be included in the `Authorization` header as a Bearer token.

## Error Handling

- **Global error handler:** Using  **ResponseInterceptor** to handle all responses, whether successful or failed, ensuring a consistent schema across the application.

## Database

- **MongoDB** is used to store user data (username and hashed password) and transaction history.
- The transaction history is logged every time a user performs a currency conversion.
- Applied indexing to certain attributes to enhance query performance.

## Unit Tests

Unit tests are written to cover all the endpoints:
- **Currency Conversion**
- **User Registration**
- **User Login**
- **Transaction History**

Tests ensure that the API handles edge cases, error scenarios, and correct responses.

## Continuous Integration

- **GitHub Actions** is used to automate static code analysis and run tests. It ensures the quality of the code by performing tasks like linting, testing, and building the project with every push or pull request. This integration provides continuous feedback on code quality and prevents errors from reaching production.

## GitHub Repository

The code repository is available on GitHub: [Link to GitHub](https://github.com/KhaldMansour/CurrencyFlow)

## Conclusion

This API provides a comprehensive solution for currency exchange, user registration, and transaction history, with a focus on security, scalability, performance, and ease of use through **Swagger documentation**.
