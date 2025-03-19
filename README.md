# technical_test_conteo v1.0.0

This test assesses a candidate's proficiency in developing a basic web application using Node.js, Express, MongoDB, and Swagger for API documentation.

## Installation

To set up and run the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/danicano123/technical_test_conteo.git

cd technical_test_conteo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

- Create a .env file in the root directory of the project.

- Configure the database connection and other necessary environment variables as follows or delivered credential by email:

PORT=3000
MONGO_URI=mongodb://localhost:27017/technical_test_conteo

### 4. Start the Docker development server

```bash
docker compose up --build
```

The development server will start running at http://localhost:3000. You can access the app from this endpoint.

### 5. Start the local development server

```bash
npm start
```

The development server will start running at http://localhost:3000. You can access the app from this endpoint.

### 6. API Documentation

This project includes API documentation using Swagger. You can access it at:

http://localhost:3000/api-docs

