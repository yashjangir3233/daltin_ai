import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Field, ErrorMessage } from 'formik'

const countries = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Japan']
const englishTests = ['IELTS', 'TOEFL', 'PTE', 'None']



const Academic = ({ values, setFieldValue }) => {

  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isTestOpen, setIsTestOpen] = useState(false)
  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Academic Interests</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Interested Country<span className="text-red-700 ml-1">*</span>
          </label>
          <div className="relative">
            <Field name="interestedCountry">
              {({ field }) => (
                <>
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="block w-full pl-3 pr-10 py-2 text-left text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    aria-haspopup="listbox"
                    aria-expanded={isCountryOpen}
                    {...field}
                  >
                    {field.value || 'Select a country'}
                    <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </button>
                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        role="listbox"
                      >
                        {countries.map((country) => (
                          <li
                            key={country}
                            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                            role="option"
                            onClick={() => {
                              setFieldValue('interestedCountry', country)
                              setIsCountryOpen(false)
                            }}
                          >
                            {country}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Field>
            <ErrorMessage name="interestedCountry" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>

        <div>
          <label htmlFor="englishTest" className="block text-sm font-medium text-gray-700 mb-1">
            English Proficiency Test<span className="text-red-700 ml-1">*</span>
          </label>
          <div className="relative">
            <Field name="test">
              {({ field }) => (
                <>
                  <button
                    type="button"
                    onClick={() => setIsTestOpen(!isTestOpen)}
                    className="block w-full pl-3 pr-10 py-2 text-left text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    aria-haspopup="listbox"
                    aria-expanded={isTestOpen}
                    {...field}
                  >
                    {field.value || 'Select a test'}
                    <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </button>
                  <AnimatePresence>
                    {isTestOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        role="listbox"
                      >
                        {englishTests.map((test) => (
                          <li
                            key={test}
                            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                            role="option"
                            onClick={() => {
                              setFieldValue('test', test)
                              setIsTestOpen(false)
                            }}
                          >
                            {test}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Field>
            <ErrorMessage name="test" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>

        <AnimatePresence>
          {values.test && values.test !== 'None' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
                {values.test} Score<span className="text-red-700 ml-1">*</span>
              </label>
              <Field
                type="number"
                id="score"
                name="score"
                placeholder={`Enter your ${values.test} score`}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="score" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {values.test === 'None' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="educationBoard" className="block text-sm font-medium text-gray-700 mb-1">
                Education Board<span className="text-red-700 ml-1">*</span>
              </label>
              <Field
                type="text"
                id="educationBoard"
                name="educationBoard"
                placeholder="Enter your education board details"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="educationBoard" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Academic