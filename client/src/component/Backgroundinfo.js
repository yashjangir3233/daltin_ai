import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { motion, AnimatePresence } from 'framer-motion'

const Backgroundinfo = ({values}) => {

  const [tooltipVisible, setTooltipVisible] = useState({
    visa: false,
    gap: false
  })

  const showTooltip = (tooltipId) => {
    setTooltipVisible(prev => ({ ...prev, [tooltipId]: true }))
  }

  const hideTooltip = (tooltipId) => {
    setTooltipVisible(prev => ({ ...prev, [tooltipId]: false }))
  }

  const bounceVariants = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Education Details</h2>
      <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visa Rejection Status
                <span 
                  className="ml-1 text-gray-400 cursor-help" 
                  onMouseEnter={() => showTooltip('visa')}
                  onMouseLeave={() => hideTooltip('visa')}
                >
                  (?)
                </span>
              </label>
              <div className="mt-2 space-x-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="rejectionStatus"
                      value={option}
                      className="form-radio text-blue-600"
                    />
                    <motion.span
                      className="ml-2"
                      animate={values.rejectionStatus === option ? "bounce" : ""}
                      variants={bounceVariants}
                    >
                      {option}
                    </motion.span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="rejectionStatus" component="div" className="text-red-500 text-xs mt-1" />
              <AnimatePresence>
                {tooltipVisible.visa && (
                  <motion.div
                    className="absolute z-10 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariants}
                  >
                    Indicate if you've ever had a visa rejection. This information helps in assessing your application.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gap in Education
                <span 
                  className="ml-1 text-gray-400 cursor-help"
                  onMouseEnter={() => showTooltip('gap')}
                  onMouseLeave={() => hideTooltip('gap')}
                >
                  (?)
                </span>
              </label>
              <Field
                as="select"
                name="gap"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Select gap duration</option>
                <option value="No gap">No gap</option>
                <option value="less than 1 year">Less than 1 year</option>
                <option value="one to two years">1-2 years</option>
                <option value="more than 2 years">More than 2 years</option>
              </Field>
              <ErrorMessage name="gap" component="div" className="text-red-500 text-xs mt-1" />
              <AnimatePresence>
                {tooltipVisible.gap && (
                  <motion.div
                    className="absolute z-10 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariants}
                  >
                    Select the duration of any gap in your education. This helps us understand your academic journey better.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
    </div>
  )
}

export default Backgroundinfo