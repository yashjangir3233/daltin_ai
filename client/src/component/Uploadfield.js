import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ErrorMessage,useField } from 'formik'
import { CheckCircle, Upload } from 'lucide-react'
import axios from 'axios'

const Uploadfield = ({ field, setFieldValue}) => {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setUploadedFile(acceptedFiles[0])
      const formData = new FormData()
      console.log(file)
      formData.append('file', file)
      
      try {
        setUploadStatus('uploading')
        const response = await axios.post('https://daltin-ai-8d5v.vercel.app/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setUploadProgress(percentCompleted)
          }
        })
        console.log(`http://localhost:4000/fileview/${response.data.fileName}`)
        setFieldValue(field.name,`http://localhost:4000/fileview/${response.data.fileName}`)
        console.log(response.data.msg)
        setUploadStatus('success')
      } catch (error) {
        console.error('Error uploading file:', error)
        setUploadStatus('error')
      }
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles),
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  })

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}<span className="text-red-700 ml-1">*</span></label>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-indigo-600 bg-indigo-50'
            : uploadStatus === 'success'
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        <input {...getInputProps()} />
        {uploadStatus === 'success' ? (
          <div className="flex items-center justify-center text-green-600">
            <CheckCircle className="mr-2" size={20} />
            <p>{uploadedFile.name} successfully uploaded</p>
          </div>
        ) : (
          <div className="text-gray-500">
            <Upload className="mx-auto mb-2" size={24} />
            <p>Drag & drop a file here, or click to select</p>
            <p className="text-xs mt-1">Max file size: 5MB. Supported formats: PDF, JPG, PNG</p>
          </div>
        )}
      </div>
      {/* Progress bar */}
      {uploadStatus === 'uploading' && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm mt-1" />
      {uploadStatus === 'uploading' && <p className="text-blue-500 text-sm mt-1">Uploading...</p>}
      {uploadStatus === 'success' && <p className="text-green-500 text-sm mt-1">File uploaded successfully!</p>}
      {uploadStatus === 'error' && <p className="text-red-500 text-sm mt-1">Error uploading file</p>}
    </div>
  )
}

export default Uploadfield

