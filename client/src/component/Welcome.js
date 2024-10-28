import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Welcome = () => {
  return (
    <div className="text-center space-y-28">
      <h2 className="text-3xl font-bold mb-4">Welcome to Student Registration</h2>
      <p className="text-gray-600 mb-4">
        We're excited to have you join our university. This registration process will guide you through the necessary steps
        to become a student.
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <img src={logo} alt="Welcome" className="w-28 mx-auto" />
      </motion.div>
    </div>
  )
}

export default Welcome