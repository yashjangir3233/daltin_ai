import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { CalendarIcon, ChevronDown } from 'lucide-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'


const MotionDiv = motion.div

const Address = () => {

  const [openItem, setOpenItem] = useState("address")
  const [showCalendar, setShowCalendar] = useState(false)

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? "" : item)
  }


  return (
<div className="w-full bg-white ">
      <div className="w-full">
        <div className="border-b border-gray-200">
          <button
            type="button"
            onClick={() => toggleAccordion("address")}
            className="px-6 py-4 flex justify-between items-center w-full"
          >
            <span className="text-lg font-medium">Address Information</span>
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                openItem === "address" ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openItem === "address" && (
              <MotionDiv
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-4 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Native Country<span className="text-red-700 ml-1">*</span></label>
                    <Field
                      as="select"
                      id="country"
                      name="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">Native State<span className="text-red-700 ml-1">*</span></label>
                    <Field
                      as="select"
                      id="state"
                      name="state"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select state</option>
                      <option value="ca">California</option>
                      <option value="ny">New York</option>
                      <option value="tx">Texas</option>
                    </Field>
                    <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Native City<span className="text-red-700 ml-1">*</span></label>
                    <Field
                      as="select"
                      id="city"
                      name="city"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select city</option>
                      <option value="sf">San Francisco</option>
                      <option value="la">Los Angeles</option>
                      <option value="sd">San Diego</option>
                    </Field>
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">Postal Code<span className="text-red-700 ml-1">*</span></label>
                    <Field
                      type="text"
                      id="postalcode"
                      name="postalcode"
                      placeholder="Enter postal code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <ErrorMessage name="postalcode" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
        <div className="border-b border-gray-200">
          <button
            type="button"
            onClick={() => toggleAccordion("passport")}
            className="px-6 py-4 flex justify-between items-center w-full"
          >
            <span className="text-lg font-medium">Passport Information</span>
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                openItem === "passport" ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openItem === "passport" && (
              <MotionDiv
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-4 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">Passport Number<span className="text-red-700 ml-1">*</span></label>
                    <Field
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      placeholder="Enter passport number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <ErrorMessage name="passportNumber" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="passportExpiry" className="block text-sm font-medium text-gray-700">Passport Expiry<span className="text-red-700 ml-1">*</span></label>
                    <div className="relative">
                      <Field name="passportExpiry">
                        {({ field, form }) => (
                          <>
                                <div className="">
                                  <input
                                    type="date"
                                    onChange={(e) => {
                                      form.setFieldValue('passportExpiry', e.target.value);
                                      setShowCalendar(false);
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  />
                                </div>
                          </>
                        )}
                      </Field>
                      <ErrorMessage name="passportExpiry" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Address