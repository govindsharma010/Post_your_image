# 📸 Post Your Image

> A modern full-stack image sharing application where users can upload images with captions and view a feed of community posts.

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/govindsharma010/Post_your_image?style=flat-square&logo=github)](https://github.com/govindsharma010/Post_your_image)
[![GitHub Forks](https://img.shields.io/github/forks/govindsharma010/Post_your_image?style=flat-square&logo=github)](https://github.com/govindsharma010/Post_your_image)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org)

**[Live Demo](#) • [Documentation](#setup) • [Report Bug](https://github.com/govindsharma010/Post_your_image/issues) • [Request Feature](https://github.com/govindsharma010/Post_your_image/issues)**

</div>

---

## ✨ Features

- 📤 **Image Upload** - Upload high-quality images with captions using ImageKit CDN
- 🖼️ **Image Feed** - Browse all posts in a beautiful, responsive feed layout
- 💾 **MongoDB Storage** - Persistent data storage for posts and metadata
- ⚡ **Fast & Modern** - Built with React + Vite for lightning-fast performance
- 🔄 **RESTful API** - Clean Express backend with proper error handling
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, intuitive user interface

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18, Vite, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Image Storage** | ImageKit |
| **Styling** | CSS3 |

---

## 📂 Project Structure

```
Post_your_image/
├── Backend/
│   ├── src/
│   │   ├── server.js          # Express server entry point
│   │   ├── routes/            # API endpoints
│   │   ├── models/            # MongoDB schemas
│   │   ├── controllers/       # Business logic
│   │   └── .env               # Environment variables (not committed)
│   ├── package.json
│   └── node_modules/
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx # Upload page
│   │   │   └── Feed.jsx       # View posts
│   │   ├── components/        # Reusable components
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)
- ImageKit account (free tier available)

### 1️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create `Backend/src/.env`:
```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/post_db
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
CORS_ORIGIN=http://localhost:5173
```

Start the server:
```bash
node src/server.js
# Server runs on http://localhost:3000
```

### 2️⃣ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
# Open http://localhost:5173 in your browser
```

---

## 📖 Usage

1. **Create a Post**
   - Navigate to `/create-post`
   - Click to select an image
   - Add a caption
   - Click "Post" to share

2. **View Feed**
   - Navigate to `/feed`
   - Scroll through posts from the community
   - See images and captions

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| `GET` | `/api/posts` | Get all posts |
| `POST` | `/api/posts` | Create a new post |
| `GET` | `/api/posts/:id` | Get a specific post |
| `DELETE` | `/api/posts/:id` | Delete a post |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📋 Roadmap

- [ ] User authentication & profiles
- [ ] Like and comment functionality
- [ ] Image filters and editing tools
- [ ] Hashtag support
- [ ] User notifications
- [ ] Dark mode theme
- [ ] Search functionality

---

## 🐛 Known Issues

None at the moment. Please [report bugs](https://github.com/govindsharma010/Post_your_image/issues) if you find any!

---

## 📝 Environment Variables

```env
# Backend (.env in Backend/src/)
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
IMAGEKIT_URL_ENDPOINT=<your_imagekit_endpoint>
CORS_ORIGIN=http://localhost:5173
```

⚠️ **Never commit `.env` files to version control!** Add to `.gitignore`

---

## 🔐 Security Notes

- `.env` file should NEVER be committed to Git
- ImageKit private keys must be stored securely in backend only
- Implement rate limiting for production
- Add input validation on all API endpoints
- Enable CORS only for trusted origins

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Support

Have questions or need help? 
- 📧 Open an [issue](https://github.com/govindsharma010/Post_your_image/issues)
- 💬 Start a [discussion](https://github.com/govindsharma010/Post_your_image/discussions)

---

<div align="center">

Made with ❤️ by [govindsharma010](https://github.com/govindsharma010)

⭐ If this project helped you, please consider giving it a star!

</div>