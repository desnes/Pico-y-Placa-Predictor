
# Pico y Placa Predictor

This project is a **Pico y Placa Predictor** that helps users determine whether their vehicle is allowed on the road based on the Pico y Placa regulation in Quito, Ecuador. Users can input their vehicle's license plate, date, and time to see if they can drive on the specified date and time.

---

## Table of Contents

- [Pico y Placa Predictor](#pico-y-placa-predictor)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Backend Dependencies](#2-install-backend-dependencies)
    - [3. Install Frontend Dependencies](#3-install-frontend-dependencies)
  - [Running the Backend](#running-the-backend)
    - [1. Running Locally](#1-running-locally)
    - [2. Running with Docker (Optional)](#2-running-with-docker-optional)
  - [Running the Frontend](#running-the-frontend)
    - [1. Running Locally](#1-running-locally-1)
  - [Testing](#testing)
    - [Backend Tests](#backend-tests)

---

## Description

The **Pico y Placa Predictor** uses input from users such as the vehicle's license plate, date, and time to check if the vehicle is restricted from driving. The application is divided into two parts: 
- **Backend**: Handles the validation of the Pico y Placa rules based on the last digit of the license plate.
- **Frontend**: A simple form for users to input their details and view the result in a modal popup.

---

## Features

- Validate both **Car** and **Motorcycle** license plates.
- Check if a vehicle can drive based on **Pico y Placa** regulations.
- Displays results in a modal with a clear message.
- **Validation** for incorrect or incomplete inputs.
  
---


## Setup and Installation

### Prerequisites
Before you start, make sure you have the following installed on your machine:

- **Node.js** (v14.x or later)
- **npm** (comes with Node.js)
- **Docker** (optional, for running the backend in a container)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Pico-y-Placa-Predictor.git
cd Pico-y-Placa-Predictor
```

### 2. Install Backend Dependencies

Navigate to the `backend/` directory and install the dependencies:

```bash
cd backend/
npm install
```

### 3. Install Frontend Dependencies

Navigate to the `frontend/` directory and install the dependencies:

```bash
cd ../frontend/
npm install
```

---

## Running the Backend

You can run the backend server locally or with Docker.

### 1. Running Locally

To start the backend server, run the following command from the `backend/` directory:

```bash
cd backend/
node app.js
```

This will start the server at `http://localhost:3000`.

### 2. Running with Docker (Optional)

To run the backend in a Docker container, use the following commands:

```bash
cd backend/
docker build -t pico-placa-backend .
docker run -p 3000:3000 pico-placa-backend
```

The backend will be available at `http://localhost:3000`.

---

## Running the Frontend

Once the backend is running, you can start the frontend.

### 1. Running Locally

Navigate to the `frontend/` directory and run:

```bash
cd frontend/
npm run dev
```

This will start the React development server at `http://localhost:5173`.

---

## Testing

### Backend Tests

You can run backend tests with Jest. Navigate to the `backend/` directory and run:

```bash
npm test
```



---

