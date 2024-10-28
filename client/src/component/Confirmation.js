import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Download, Printer } from 'lucide-react'
// import { button } from "@/components/ui/button"



const Confirmation = ({values}) => {
    React.useEffect(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }, [])
    
      const handleDownload = () => {
      }
    
      const handlePrint = () => {
        const printContent = document.getElementById('print-content')
        const windowPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')
        windowPrint.document.write(printContent.innerHTML)
        windowPrint.document.close()
        windowPrint.focus()
        windowPrint.print()
        windowPrint.close()
      }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg text-center h-screen"
    >
      <h2 className="text-2xl font-bold mb-4 text-green-600">Registration Submitted Successfully!</h2>
      <p className="mb-4">Thank you for completing your registration. Here are the next steps:</p>
      <ol className="list-decimal list-inside mb-6">
        <li>Check your email for a confirmation message</li>
        <li>Prepare any additional documents as requested</li>
        <li>Wait for our admissions team to review your application</li>
        <li>We will contact you within 5-7 business days with further instructions</li>
      </ol>
      <div className="flex space-x-4 mb-6 justify-center items-center">
        <button onClick={handleDownload} className="flex items-center bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors outline-none border-none px-2 py-3">
          <Download className="mr-2" size={16} />
          Download Summary
        </button>
        <button onClick={handlePrint} className="flex items-center bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors outline-none border-none px-2 py-3">
          <Printer className="mr-2" size={16} />
          Print Summary
        </button>
      </div>
    </motion.div>
  )
}

export default Confirmation