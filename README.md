# CourseHub

A course management API built with Express.js and MongoDB. This application allows users to browse courses and admins to manage course content.

## Features

- **User Management**: User signup and login with JWT authentication
- **Course Management**: Browse and manage courses
- **Admin Panel**: Admin-only features for course management
- **Password Security**: Bcrypt password hashing
- **Data Validation**: Zod schema validation

## Tech Stack

- **Backend**: Express.js (Node.js)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt
- **Validation**: Zod
- **Environment**: Dotenv

## Project Structure

```
CourseHub/
├── index.js              # Main app entry point
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── configurations/       # Config setup
├── database/            # MongoDB models
├── middlewares/         # Auth and role-based middleware
└── routes/              # API endpoints
    ├── admin.js         # Admin routes
    ├── user.js          # User routes
    └── course.js        # Course routes
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with required environment variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

## Running the Application

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Routes

### User Routes (`/user`)
- User authentication and profile management

### Course Routes (`/course`)
- Course browsing and details

### Admin Routes (`/admin`)
- Course creation and management (admin only)

## Dependencies

- `express` - Web framework
- `mongoose` - MongoDB ORM
- `jsonwebtoken` - JWT authentication
- `bcrypt` - Password hashing
- `zod` - Schema validation
- `dotenv` - Environment variable management
- `nodemon` - Development auto-reload

## Status

🚀 Initial stage development

## License

ISC
