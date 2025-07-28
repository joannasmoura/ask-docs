import { useState } from 'react'
import { askQuestion } from '../services/api'

export default function ChatBox({ documentText }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    setLoading(true)
    
    try {
      const data = await askQuestion(documentText, question)
      setAnswer(data.answer)
    } catch (error) {
      console.error('Failed to get answer:', error)
      // You can add error handling here (e.g., show a toast notification)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-8">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        placeholder="Ask something about the document..."
        rows={3}
      />
      <button
        onClick={handleAsk}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {answer && (
        <div className="p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  )
}
