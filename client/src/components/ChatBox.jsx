import { useState } from 'react'

export default function ChatBox({ documentText }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    setLoading(true)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ documentText, question }),
    })

    const data = await res.json()
    setAnswer(data.answer)
    setLoading(false)
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
