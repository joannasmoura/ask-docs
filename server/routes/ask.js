import express from 'express'
import { OpenAI } from 'openai'

const router = express.Router()

router.post('/', async (req, res) => {
    const { documentText, question } = req.body

    if (!documentText || !question) {
        return res.status(400).json({ error: 'Missing inputs' })
    }

    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

        const response = await openai.chat.completions.create({
            model: 'gpt-4.1-nano',
            messages: [
                { role: 'system', content: 'You are a helpful assistant that answers questions based on a document.' },
                { role: 'user', content: `Document:\n${documentText}` },
                { role: 'user', content: `Question: ${question}` },
            ],
            max_tokens: 300,
        })

        res.json({ answer: response.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch answer from OpenAI' })
    }
})

export default router
