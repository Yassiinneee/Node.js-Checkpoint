# 🚀 Node.js Fundamentals Checkpoint

![Node.js](https://img.shields.io/badge/Node.js-v24+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-Package_Manager-CB3837?style=for-the-badge&logo=npm)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📌 Project Overview

This project was completed as part of the **Node.js Fundamentals Checkpoint**.

The objective is to explore the core features of **Node.js** by implementing a series of practical exercises that demonstrate:

- Running JavaScript outside the browser
- Creating an HTTP server
- Working with the File System module
- Using third-party npm packages
- Sending emails with Nodemailer

Each exercise is implemented independently inside its own folder to ensure a clean, modular, and maintainable project structure.

---

# 📂 Project Structure

```
nodejs-checkpoint/
│
├── package.json
├── package-lock.json
├── README.md
│
├── task-1/
│   └── hello-world.js
│
├── task-2/
│   └── server.js
│
├── task-3-file-system/
│   ├── file-system.js
│   ├── hello.txt
│   └── welcome.txt
│
├── task-4-password-generator/
│   └── password-generator.js
│
└── task-5-email-sender/
    └── email-sender.js
```

---

# 🎯 Objectives

This checkpoint demonstrates how to:

- Install and configure Node.js
- Execute JavaScript using Node.js
- Build a basic HTTP server
- Read and write files using the File System module
- Install and use external npm packages
- Generate secure random passwords
- Send emails using Nodemailer

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| JavaScript (ES6+) | Programming Language |
| HTTP Module | Web Server |
| File System (fs) | File Operations |
| Path Module | File Path Management |
| generate-password | Password Generation |
| Nodemailer | Email Sending |
| npm | Package Manager |

---

# 📦 Installation

## 1. Clone the repository

```bash
git clone https://github.com/your-username/nodejs-checkpoint.git
```

---

## 2. Navigate to the project

```bash
cd nodejs-checkpoint
```

---

## 3. Install dependencies

```bash
npm install
```

or

```bash
npm install generate-password nodemailer
```

---

# ▶ Running the Project

## Task 1

```bash
node task-1/hello-world.js
```

Expected output

```
HELLO WORLD
```

---

## Task 2

```bash
node task-2/server.js
```

Open your browser

```
http://localhost:3000
```

Expected output

```
Hello Node!!!!
```

---

## Task 3

```bash
node task-3-file-system/file-system.js
```

This task:

- Creates **welcome.txt**
- Reads **hello.txt**
- Displays its contents in the terminal

---

## Task 4

```bash
node task-4-password-generator/password-generator.js
```

Example output

```
Generated Password:

M8@qJ7!Lz#2P
```

---

## Task 5

```bash
node task-5-email-sender/email-sender.js
```

Before running this task:

- Enable Google Two-Factor Authentication
- Generate a Google App Password
- Replace the placeholders in the script with your email credentials

---

# 📖 Task Details

## ✅ Task 1 — Hello World

A simple Node.js program that prints:

```
HELLO WORLD
```

This introduces executing JavaScript using the Node.js runtime.

---

## ✅ Task 2 — HTTP Server

Creates a web server that:

- listens on port **3000**
- returns

```html
<h1>Hello Node!!!!</h1>
```

when visiting

```
http://localhost:3000
```

---

## ✅ Task 3 — File System

Uses the built-in **fs** module to:

- create a file named **welcome.txt**
- write "Hello Node"
- read **hello.txt**
- display its contents in the console

---

## ✅ Task 4 — Password Generator

Uses the **generate-password** npm package to create a secure password with configurable options such as:

- uppercase letters
- lowercase letters
- numbers
- symbols

---

## ✅ Task 5 — Email Sender

Uses **Nodemailer** to send an email through a Gmail account using an App Password.

---

# 📚 Dependencies

```json
{
  "generate-password": "^1.x.x",
  "nodemailer": "^7.x.x"
}
```

---

# 💻 Useful Commands

Install dependencies

```bash
npm install
```

Run Task 1

```bash
node task-1/hello-world.js
```

Run Task 2

```bash
node task-2/server.js
```

Run Task 3

```bash
node task-3-file-system/file-system.js
```

Run Task 4

```bash
node task-4-password-generator/password-generator.js
```

Run Task 5

```bash
node task-5-email-sender/email-sender.js
```

---

# 📸 Expected Results

| Task | Result |
|-------|--------|
| Task 1 | Prints "HELLO WORLD" |
| Task 2 | HTTP server running on port 3000 |
| Task 3 | Creates `welcome.txt` and reads `hello.txt` |
| Task 4 | Generates a random secure password |
| Task 5 | Sends a test email successfully |

---

# 🔒 Security Notice

For security reasons:

- Never upload your personal email credentials.
- Never commit passwords or App Passwords to GitHub.
- Use environment variables (`.env`) for sensitive information in production applications.

---

# 📈 Skills Acquired

Throughout this checkpoint, the following Node.js concepts were practiced:

- JavaScript execution with Node.js
- Creating HTTP servers
- Working with asynchronous file operations
- Using built-in Node.js modules
- Installing and managing npm packages
- Integrating third-party libraries
- Basic backend development principles

---

# 👨‍💻 Author

**Yassine Kalthoum**

Node.js  Checkpoint

---

# 📄 License

This project was developed for educational purposes as part of the **Node.js  Checkpoint**.

MIT License.
