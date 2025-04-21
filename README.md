# Edreq

## Overview

This repository consists of two main folders:

- `frontend` - Contains the React-based client-side application.
- `backend` - Contains the Node.js and Express-based server-side application.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (LTS version recommended) - [Download here](https://nodejs.org/)
- **MongoDB** (for local setup) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Setting Up the Backend

```bash
cd backend
```

#### Install Dependencies

```bash
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend` folder and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

#### Run the Backend Server

```bash
npm start
```

The backend will run at `http://localhost:5000`

### 3. Setting Up the Frontend

```bash
cd frontend
```

#### Install Dependencies

```bash
npm install
```

#### Run the Frontend Application

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`
