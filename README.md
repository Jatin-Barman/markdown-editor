# Real-time Markdown Editor with Live Preview

This project is a real-time Markdown editor built with Node.js and React. It allows users to write Markdown text and see the rendered HTML output in real-time. The editor also includes a dark mode for better readability in low-light environments.

## Features

- **Real-time Conversion**: As you type Markdown, the corresponding HTML is displayed instantly.
- **Dark Mode**: Toggle between light and dark mode for a better user experience.
- **Backend Processing**: Uses a Node.js backend to handle Markdown to HTML conversion.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/markdown-editor.git
    cd markdown-editor
    ```

2. **Install backend dependencies:**
    ```bash
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd client
    npm install
    ```

### Running the Application

1. **Start the Node.js server:**
    ```bash
    cd ..
    node server.js
    ```

2. **Start the React application:**
    ```bash
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- **Markdown Editor**: Type your Markdown text in the editor on the left.
- **Live Preview**: See the HTML output in the pane on the right.
- **Dark Mode**: Click the toggle button at the top right corner to switch between light and dark mode.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Marked](https://marked.js.org/) - A markdown parser and compiler.


