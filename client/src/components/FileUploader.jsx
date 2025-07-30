import { useState } from 'react'
import { uploadFile } from '../services/api'

export default function FileUploader({ onUpload }) {
  const [file, setFile] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile)
    }
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
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver 
            ? 'border-purple-400 bg-purple-900/20' 
            : 'border-gray-600 hover:border-gray-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Upload Icon */}
        <div className="w-12 h-12 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">
          Upload a PDF document
        </h3>
        <p className="text-gray-400 text-sm">
          Drag and drop a file here, or click to select a file
        </p>
        
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf"
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition-colors"
        >
          Choose File
        </label>
      </div>

      {/* Upload Button */}
      {file && (
        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
          <span className="text-white text-sm">{file.name}</span>
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Upload & Extract
          </button>
        </div>
      )}
    </div>
  )
}
