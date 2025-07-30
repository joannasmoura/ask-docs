import { useState } from 'react';
import { uploadFile } from '../services/api';

const useUploadHandler = ({ setDocumentText }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (file) => {
    try {
      const data = await uploadFile(file)
      setLoading(true); // Start loading
      setError(null); // Reset error
      setDocumentText(data.text); // Set document text
    } catch (err) {
      setError('Failed to upload the document. Please try again.', err); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return { loading, error, handleUpload };
};

export default useUploadHandler;