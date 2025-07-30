import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import uploadRoutes from './routes/upload.js'
import askRoutes from './routes/ask.js'

dotenv.config()

const app = express()

// Configure CORS with specific options
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173', 'https://ask-docs-76ef5.web.app', 'ask-docs-76ef5.firebaseapp.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use('/upload', uploadRoutes)
app.use('/ask', askRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
