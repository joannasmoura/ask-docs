import { useState } from 'react'
import FileUploader from './components/FileUploader'
import ChatBox from './components/ChatBox'

function App() {
  const [documentText, setDocumentText] = useState('')

  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">📄 Ask the Docs</h1>
      <FileUploader onUpload={setDocumentText} />
      {documentText && <ChatBox documentText={documentText} />}
    </main>
  )
}

export default App
