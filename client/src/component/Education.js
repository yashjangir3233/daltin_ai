
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusCircle, X } from 'lucide-react'
import { Formik, Form, Field, ErrorMessage,FieldArray } from 'formik'




const Education = ({values, handleChange, setFieldValue}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Education Details</h2>
      
      <FieldArray name="educations">
        {({ remove, push }) => (
          <>
            <AnimatePresence>
              {values.educations.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 bg-gray-50 p-4 rounded-md relative"
                >
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Qualification<span className="text-red-700 ml-1">*</span>
                      </label>
                      <Field
                        type="text"
                        name={`educations[${index}].qualification`}
                        placeholder="e.g., Bachelor's, Master's"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name={`educations[${index}].qualification`} component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Institution<span className="text-red-700 ml-1">*</span>
                      </label>
                      <Field
                        type="text"
                        name={`educations[${index}].institution`}
                        placeholder="Enter institution name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name={`educations[${index}].institution`} component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Percentage<span className="text-red-700 ml-1">*</span>
                      </label>
                      <Field
                        type="number"
                        name={`educations[${index}].percentage`}
                        placeholder="Enter percentage"
                        min="0"
                        max="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name={`educations[${index}].percentage`} component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Passing Year<span className="text-red-700 ml-1">*</span>
                      </label>
                      <Field
                        as="select"
                        name={`educations[${index}].passingYear`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name={`educations[${index}].passingYear`} component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Country<span className="text-red-700 ml-1">*</span>
                      </label>
                      <Field
                        type="text"
                        name={`educations[${index}].country`}
                        placeholder="Enter country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name={`educations[${index}].country`} component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => push({ qualification: '', institution: '', percentage: '', passingYear: '', country: '' })}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add Another Qualification
            </button>
          </>
        )}
      </FieldArray>
    </div>
  )
}

export default Education