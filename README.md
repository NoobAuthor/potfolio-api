# Portfolio API - REST Service with Authentication & Integrations

A production-ready REST API demonstrating full-stack development skills, featuring secure authentication, third-party integrations, and comprehensive documentation.

[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)](https://www.mongodb.com/)

## Features

- **Google OAuth2 Authentication** - Secure user login with JWT tokens
- **Blog Post CRUD Operations** - Full Create/Read/Update/Delete functionality
- **API Security** - Rate limiting, input validation, and Helmet protection
- **Payment Integration** - Stripe payment processing
- **Email Notifications** - SendGrid integration
- **Swagger Documentation** - Interactive API explorer

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Express.js** | REST API framework |
| **Mongoose** | MongoDB object modeling |
| **Passport.js** | Authentication middleware |
| **Swagger** | API documentation |
| **Stripe** | Payment processing |
| **SendGrid** | Transactional emails |
| **JWT** | Secure token authentication |

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/portfolio-api.git
cd portfolio-api
```

### 2. Install dependencies 
```bash
npm install 
```

### 3. .env file
```env
MONGODB_URI=mongodb:your_mongodb_address
GOOGLE_CLIENT_ID=your_google_client_id
JWT_SECRET=your_jwt_secret_key
SENDGRID_API_KEY=your_sendgrid_key
STRIPE_SECRET_KEY=your_stripe_key
```

### 4. Start server
```bash
npm server.js
```
## API Documentation

Access interactive docs at http://localhost:3000/api-docs

Swagger Preview

## Common Errors & Solutions
### 1. "Cannot GET /" Error

### Solution:
```javascript
// Add to server.js
app.get('/', (req, res) => res.json({ status: "API Running" }));
```

## 2. Route Not Found (404)

### Causes:

1. Incorrect route registration order

2. Missing route files

### Fix:
```javascript
// server.js
app.use('/auth', authRoutes); // Before error handlers
```

## 3. Authentication Failures

### Debug Checklist:

1. Verify Google Client ID in .env

2. Check JWT token expiration (default 1hr)

3. Ensure ```Authorization: Bearer <token>``` header

## Forking/Cloning Instructions

## Clone Repository

### 1. Clone this GitHub repository  
```bash
    git clone https://github.com/yourusername/portfolio-api.git
```

License

MIT License 
