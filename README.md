# 📄 Ask the Docs

A modern web application that allows users to upload PDF documents and ask questions about their content using AI-powered natural language processing.

### Live version can be found here: https://ask-docs-76ef5.web.app/

## 🚀 Features

- **PDF Document Upload**: Upload and process PDF files
- **Text Extraction**: Automatically extract text content from uploaded PDFs
- **AI-Powered Q&A**: Ask questions about document content using OpenAI's GPT-3.5-turbo
- **Real-time Chat Interface**: Interactive chat-like interface for asking questions
- **Responsive Design**: Modern, clean UI built with Tailwind CSS
- **Cross-Origin Support**: Properly configured CORS for seamless frontend-backend communication

## 🛠️ Tech Stack

### Frontend (Client)

- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for styling
- **ESLint** - Code linting and formatting

### Backend (Server)

- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **OpenAI API** - GPT-3.5-turbo for AI-powered responses
- **pdf-parse 1.1.1** - PDF text extraction library
- **Multer 2.0.2** - File upload middleware
- **CORS** - Cross-Origin Resource Sharing support
- **dotenv** - Environment variable management

## 📁 Project Structure

```
ask-the-docs/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── FileUploader.jsx
│   │   │   └── ChatBox.jsx
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Backend Node.js application
│   ├── routes/            # API route handlers
│   │   ├── upload.js      # File upload endpoint
│   │   └── ask.js         # Q&A endpoint
│   ├── utils/             # Utility functions
│   │   └── extractTextFromPDF.js
│   ├── package.json       # Backend dependencies
│   └── server.js          # Express server setup
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/joannasmoura/ask-docs.git
   cd ask-the-docs
   ```

2. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the server directory:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   ```

   Create a `.env` file in the client directory:

   ```env
   VITE_API_URL=http://localhost:3001
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd server
   node server.js
   ```

   The server will start on port 3001 (avoiding port 5000 due to macOS AirPlay conflicts).

2. **Start the frontend development server**

   ```bash
   cd client
   npm run dev
   ```

   The React app will start on `http://localhost:5173`.

3. **Open your browser**
   Navigate to `http://localhost:5173` to use the application.

## 🔧 API Endpoints

### POST `/upload`

Upload and extract text from a PDF file.

**Request:**

- Content-Type: `multipart/form-data`
- Body: PDF file

**Response:**

```json
{
  "text": "Extracted text content from PDF"
}
```

### POST `/ask`

Ask a question about the uploaded document.

**Request:**

```json
{
  "documentText": "Document content...",
  "question": "Your question here"
}
```

**Response:**

```json
{
  "answer": "AI-generated answer based on document content"
}
```

## 🎯 How It Works

1. **Document Upload**: Users upload PDF files through the FileUploader component
2. **Text Extraction**: The server uses pdf-parse to extract text content from the PDF
3. **Question Input**: Users can ask questions about the document content
4. **AI Processing**: Questions and document text are sent to OpenAI's GPT-3.5-turbo
5. **Response Display**: AI-generated answers are displayed in a chat-like interface

## 🔒 Security Features

- CORS properly configured for secure cross-origin requests
- Environment variables for sensitive API keys
- Input validation on both frontend and backend
- Error handling for file uploads and API calls

## 🐛 Troubleshooting

### Common Issues

1. **Port 5000 conflicts on macOS**

   - Solution: The app uses port 3001 to avoid AirPlay conflicts

2. **OpenAI API key errors**

   - Ensure your API key is correctly set in the server `.env` file
   - Verify the key has sufficient credits

3. **PDF parsing errors**
   - Ensure uploaded files are valid PDFs
   - Some PDFs with complex formatting may not extract perfectly

### Development

- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:3001`
- Check browser console and server logs for debugging

## Deployment
- **Frontend**: Deployed on Firebase. Visit [Firebase Hosting](https://firebase.google.com/docs/hosting) for more details.
- **Backend**: Deployed on Render. Visit [Render](https://render.com/) for more details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.
