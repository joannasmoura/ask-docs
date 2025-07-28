import { useState } from 'react'
import { uploadFile } from '../services/api'

export default function FileUploader({ onUpload }) {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      const data = await uploadFile(file)
      onUpload(data.text)
    } catch (error) {
      console.error('Upload failed:', error)
      // You can add error handling here (e.g., show a toast notification)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Upload & Extract
      </button>
    </div>
  )
}
