import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

const Finalreview = ({ values, setCurrentStep }) => {
    const sections = [
        { title: 'Personal Information', fields: ['title', 'firstName', 'middleName', 'lastName', 'email', 'phone', 'emergencyPhone', 'marital', 'gender', 'dob'] },
        { title: 'Address', fields: ['country', 'state', 'city', 'postalcode', 'passportNumber', 'passportExpiry'] },
        { title: 'Academic Information', fields: ['interestedCountry', 'test', 'score', 'educationBoard'] },
        { title: 'Education', fields: ['educations'] },
        { title: 'Background Information', fields: ['rejectionStatus', 'gap'] },
        { title: 'Uploaded Documents', fields: ['tenthMarksheet', 'twelfthMarksheet', 'passport', 'englishProficiency', 'sop', 'cv', 'experience', 'bachelorsDegree'] }
      ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Review Your Information</h2>
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <button
              onClick={() => setCurrentStep(index)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <ChevronLeft size={16} />
              Edit
            </button>
          </div>
          {section.fields.map(field => (
            <div key={field} className="grid grid-cols-2 gap-2">
              <span className="text-gray-600">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
              <span>
                {field === 'educations' 
                  ? values[field].map((edu, i) => (
                      <div key={i} className="mb-2">
                        <p>Qualification: {edu.qualification}</p>
                        <p>Institution: {edu.institution}</p>
                        <p>Percentage: {edu.percentage}</p>
                        <p>Passing Year: {edu.passingYear}</p>
                        <p>Country: {edu.country}</p>
                      </div>
                    ))
                  : values[field] instanceof File 
                    ? values[field].name 
                    : values[field] || 'Not provided'
                }
              </span>
            </div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Finalreview