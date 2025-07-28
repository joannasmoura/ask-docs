import express from 'express'
import multer from 'multer'
import { extractTextFromPDF } from '../utils/extractTextFromPDF.js'

const router = express.Router()
const upload = multer()

router.post('/', upload.single('file'), async (req, res) => {
    console.log('Upload route hit')
    console.log('Request body:', req.body)
    console.log('Request file:', req.file)

    try {
        const file = req.file
        if (!file) {
            console.log('No file uploaded')
            return res.status(400).json({ error: 'No file uploaded' })
        }

        console.log('Extracting text from PDF...')
        const text = await extractTextFromPDF(file.buffer)
        console.log('Text extracted successfully')
        res.json({ text })
    } catch (err) {
        console.error('Error in upload route:', err)
        res.status(500).json({ error: err.message })
    }
})

export default router
