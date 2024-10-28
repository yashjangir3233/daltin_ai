import React from 'react'
// import logo from '../assets/logo.png'

const Sidebar = ({currentStep}) => {

    const steps = ['welcome','personal','address','academic','education','background','document','final']

  return (
    <div className='bg-[#483EFF] flex justify-between md:block px-6 rounded-lg w-full md:w-fit py-4'>
        {
            steps.map((step,index) => (
                <div className="md:flex md:gap-4 py-3 md:items-center" key={index}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold ${
                    index <= currentStep ? 'bg-[#BFE2FD] text-black' : 'bg-transparent border border-white text-white'
                  }`}>{index+1}</div>
                  <div className="hidden md:block">
                    <h3 className='text-[#7D78F5] text-sm'>STEP {index+1}</h3>
                    <span className={`text-sm ${index <= currentStep ? 'text-white' :'text-gray-300'}`}>{step}</span>
                  </div>

                </div>
            ))
        }
    </div>
  )
}

export default Sidebar