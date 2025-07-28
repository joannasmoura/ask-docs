import pdfParse from 'pdf-parse'

export async function extractTextFromPDF(buffer) {
    try {
        const data = await pdfParse(buffer)
        return data.text
    } catch (error) {
        throw new Error('Failed to extract text from PDF')
    }
}
