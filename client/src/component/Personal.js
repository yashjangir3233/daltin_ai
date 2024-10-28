import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'


const titles = ["Mr","Mrs","Ms","Dr"]
const maritalStatuses = ["single","married","divorced","widowed"]
const genders = ["male","female","other"]
const Personal = ({values,setFieldValue}) => {
  const [isTitleOpen,setIsTitleOpen] = useState(false)
  const [isMarritalStatusOpen,setIsMarritalStatusOpen] = useState(false)
  const [isGenderOpen,setIsGenderOpen] = useState(false)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <div className="relative">
            <Field name="title">
              {({ field }) => (
                <>
                  <button
                    type="button"
                    onClick={() => setIsTitleOpen(!isTitleOpen)}
                    className="block w-full pl-3 pr-10 py-2 text-left text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    aria-haspopup="listbox"
                    aria-expanded={isTitleOpen}
                    {...field}
                  >
                    {field.value || 'Select a Title'}
                    <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </button>
                  <AnimatePresence>
                    {isTitleOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        role="listbox"
                      >
                        {titles.map((title) => (
                          <li
                            key={title}
                            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                            role="option"
                            onClick={() => {
                              setFieldValue('title', title)
                              setIsTitleOpen(false)
                            }}
                          >
                            {title}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Field>
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
            <span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name
          </label>
          <Field
            type="text"
            id="middleName"
            name="middleName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm  font-medium text-gray-700 mb-1">
            Last Name
            <span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email<span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number<span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
            Emergency Phone Number<span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="emergencyPhone" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="marital" className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status
          </label>
          <div className="relative">
            <Field name="marital">
              {({ field }) => (
                <>
                  <button
                    type="button"
                    onClick={() => setIsMarritalStatusOpen(!isMarritalStatusOpen)}
                    className="block w-full pl-3 pr-10 py-2 text-left text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    aria-haspopup="listbox"
                    aria-expanded={isMarritalStatusOpen}
                    {...field}
                  >
                    {field.value || 'Select a marital status'}
                    <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </button>
                  <AnimatePresence>
                    {isMarritalStatusOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        role="listbox"
                      >
                        {maritalStatuses.map((maritalStatus) => (
                          <li
                            key={maritalStatus}
                            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                            role="option"
                            onClick={() => {
                              setFieldValue('marital', maritalStatus)
                              setIsMarritalStatusOpen(false)
                            }}
                          >
                            {maritalStatus}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Field>
            <ErrorMessage name="marital" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender<span className="text-red-700 ml-1">*</span>
          </label>
          <div className="relative">
            <Field name="gender">
              {({ field }) => (
                <>
                  <button
                    type="button"
                    onClick={() => setIsGenderOpen(!isGenderOpen)}
                    className="block w-full pl-3 pr-10 py-2 text-left text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    aria-haspopup="listbox"
                    aria-expanded={isGenderOpen}
                    {...field}
                  >
                    {field.value || 'Select a gender'}
                    <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </button>
                  <AnimatePresence>
                    {isGenderOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        role="listbox"
                      >
                        {genders.map((gender) => (
                          <li
                            key={gender}
                            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                            role="option"
                            onClick={() => {
                              setFieldValue('gender', gender)
                              setIsGenderOpen(false)
                            }}
                          >
                            {gender}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Field>
            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth<span className="text-red-700 ml-1">*</span>
          </label>
          <Field
            type="date"
            id="dob"
            name="dob"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
    </div>

  )
}

export default Personal