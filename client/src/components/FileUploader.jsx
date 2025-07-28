import { useState } from 'react'

export default function FileUploader({ onUpload }) {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    onUpload(data.text)
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
