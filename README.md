# Notes Website

## Table of Contents
- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This is a web application for managing personal notes. Users can create, edit, delete, and organize their notes. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Live Demo
See the website live at [link](https://suhailhamidnotes.netlify.app).

## Features
- User authentication and authorization
- Create, edit, delete, and view notes
- Organize notes with tags and categories
- Search functionality for notes
- Responsive design for mobile and desktop

## Installation
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the repository
```bash
git clone https://github.com/yourusername/notes-website.git
cd notes-website

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Run backend server
cd backend
npm run dev

# Run frontend server
cd ../frontend
npm start



