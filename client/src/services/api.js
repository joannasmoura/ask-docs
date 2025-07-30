const API_BASE_URL = import.meta.env.VITE_API_URL

export const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        throw new Error('Failed to upload file')
    }

    return response.json()
}

export const askQuestion = async (documentText, question) => {
    const response = await fetch(`${API_BASE_URL}/ask`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentText, question }),
    })

    if (!response.ok) {
        throw new Error('Failed to get answer')
    }

    return response.json()
} 