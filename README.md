# Complete Backend

A simple full-stack image post application with:
- React + Vite frontend
- Express backend
- MongoDB storage for posts
- Image upload using ImageKit

## Project structure

- `Backend/` — Express API, MongoDB connection, image upload service
- `Frontend/` — React/Vite app with create post and feed pages

## Features

- Upload an image and caption
- Save post metadata in MongoDB
- Fetch all posts and display them in a feed
- Frontend routing with React Router

## Setup

### 1. Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/src/` with the following values:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend server:

```bash
node server.js
```

The backend runs on `http://localhost:3000`.

### 2. Frontend

```bash
cd Frontend
npm install
npm run dev
```

Open the frontend in the browser at `http://localhost:5173`.

## Usage

- Go to `/create-post`
- Upload an image
- Add a caption
- Submit the form
- View saved posts on `/feed`

## Notes

- Frontend sends requests to `http://localhost:3000`
- CORS is enabled in the backend
- `.env` should never be committed to Git
- Add `node_modules/` and `.env` to `.gitignore`

## GitHub

After creating the README, commit and push the project:

```bash
git add README.md
git commit -m "Add project README"
git push -u origin main
```
