import useUploadHandler from './hooks/useUploadHandler';
import FileUploader from './components/FileUploader';
import ChatBox from './components/ChatBox';
import { useState } from 'react';

function App() {
  const [documentText, setDocumentText] = useState('');
  const { loading, error } = useUploadHandler({setDocumentText});

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pt-8">
        <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-6">
          {/* Header */}
          <div className=" mb-6">
            <h1 className="text-2xl font-bold text-white">Ask the Docs</h1>
          </div>

          {/* FileUploader with loading and error handling */}
          <FileUploader setDocumentText={setDocumentText} />
          
          {/* Loading indicator */}
          {loading && (
            <div className="text-center text-white mt-4">
              <p>Loading...</p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="text-center text-red-500 mt-4">
              <p>{error}</p>
            </div>
          )}

          {/* ChatBox */}
          {documentText && !loading && <ChatBox documentText={documentText} />}
        </div>
      </div>
    </div>
  );
}

export default App;
