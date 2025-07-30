import { useState } from 'react'
import { askQuestion } from '../services/api'

export default function ChatBox({ documentText }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return
    
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
    <div className="space-y-4 mt-6">
      {/* Question Input */}
      <div className="relative">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-purple-500 transition-colors"
          placeholder="Ask something about the document..."
          rows={3}
        />
      </div>

      {/* Ask Button */}
      <div className="flex justify-end">
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>

      {/* Answer Display */}
      {answer && (
        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <div className="text-white whitespace-pre-wrap">
            <span className="font-semibold text-purple-300">Answer:</span> {answer}
          </div>
        </div>
      )}
    </div>
  )
}
