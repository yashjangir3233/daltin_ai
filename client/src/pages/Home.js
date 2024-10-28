import React, { useEffect, useState } from 'react'
import Welcome from '../component/Welcome'
import Personal from '../component/Personal'
import Sidebar from '../component/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Address from '../component/Address'
import Academic from '../component/Academic'
import Education from '../component/Education'
import Backgroundinfo from '../component/Backgroundinfo'
import Uploaddocs from '../component/Uploaddocs'
import Finalreview from '../component/Finalreview'
import axios from 'axios'
import Confirmation from '../component/Confirmation'


const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = [
  'application/pdf',
  'image/jpg',
  'image/jpeg',
  'image/png'
];

// const steps = ['Welcome', 'Personal Info', 'Education', 'Course Selection', 'Review','upload docs']
const steps = ['Welcome', 'Personal Info','address','academic','education','Backgroundinfo','uploeaddocs','finalreview']

// const steps = ['Welcome', 'Personal Info', 'Education', 'Course Selection', 'Review']

const validationSchemas = [
    Yup.object({}),
    Yup.object({
        title:Yup.string(),
        firstName: Yup.string().required('First name is required'),
        middleName: Yup.string(),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.number().required('Phone number is required'),
        emergencyPhone: Yup.number().required('emergency Phone number is required'),
        marital:Yup.string(),
        gender:Yup.string().required('gender is required'),
        dob:Yup.date().required('date of birth is required')
    }),
    Yup.object({
        country:Yup.string().required('country is required'),
        state:Yup.string().required('state is required'),
        city:Yup.string().required('city is required'),
        postalcode:Yup.number().required('postalcode is required'),
        passportNumber:Yup.number().required('passportNumber is required'),
        passportExpiry:Yup.date().required('passportExpiry is required'),
    }),
    Yup.object({
        interestedCountry:Yup.string().required('interestedCountry is required'),
        test:Yup.string().required('test is required'),
        // score:Yup.number().required('score is required'),
        // educationBoard:Yup.string().required('educationBoard is required'),
        // score: Yup.number().when('test', {
        //     is: (test) => test !== 'None',
        //     then: Yup.number().required('Test score is required').min(0, 'Score must be positive'),
        //     otherwise: Yup.number().notRequired(),
        //   }),
        // educationBoard: Yup.string().when('test', {
        //     is: 'None',
        //     then: Yup.string().required('Education board details are required'),
        //     otherwise: Yup.string().notRequired(),
        //   }),
        score: Yup.lazy((value, options) => {
            // If the test is anything but 'None', validate score as required and >= 0
            if (options.parent.test && options.parent.test !== 'None') {
                return Yup.number().required('Test score is required').min(0, 'Score must be positive');
            }
            // Otherwise, score is not required
            return Yup.number().notRequired();
        }),
        educationBoard: Yup.lazy((value, options) => {
            // If test is 'None', make education board required
            if (options.parent.test === 'None') {
                return Yup.string().required('Education board details are required');
            }
            // Otherwise, education board is not required
            return Yup.string().notRequired();
        })
    }),
    Yup.object({
        educations: Yup.array().of(
          Yup.object({
            qualification: Yup.string().required('Qualification is required'),
            institution: Yup.string().required('Institution is required'),
            percentage: Yup.number().required('Percentage is required').min(0).max(100),
            passingYear: Yup.number().required('Passing year is required'),
            country: Yup.string().required('Country is required'),
          })
        ).min(1, 'At least one education record is required'),
      }),
    Yup.object({
        rejectionStatus:Yup.string().required('rejectionStatus is required'),
        gap:Yup.string().required('gap is required')
    }),
    Yup.object().shape({
        tenthMarksheet: Yup.string()
          .required('10th Marksheet is required'),
        twelfthMarksheet: Yup.string()
          .required('12th Marksheet is required'),
        passport: Yup.string()
          .required('Passport is required'),
        englishProficiency: Yup.string()
          .required('English Proficiency Test Certificate is required'),
        sop: Yup.string()
          .required('Statement of Purpose (SOP) is required'),
        cv: Yup.string()
          .required('CV is required'),
        experience: Yup.string(),
        bachelorsDegree: Yup.string()
      })
    
]

const Home = () => {

    
    const [currentStep,setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedValues, setSubmittedValues] = useState(null)
    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, steps.length - 1))
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 0))
    
    const initialValues = {
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        emergencyPhone: '',
        marital: '',
        gender: '',
        dob: null,
        country: '',
        state: '',
        city: '',
        postalcode: '',
        passportNumber: '',
        passportExpiry: null,
        interestedCountry: '',
        test: '',
        score: '',
        educationBoard: '',
        educations: [
          {
            qualification: '',
            institution: '',
            percentage: '',
            passingYear: '',
            country: '',
          }
        ],
        rejectionStatus: '',
        gap: '',
        tenthMarksheet: null,
        twelfthMarksheet: null,
        passport: null,
        englishProficiency: null,
        sop: null,
        cv: null,
        experience: null,
        bachelorsDegree: null,
      };
    useEffect(() => {
        console.log('effect ka ',currentStep)
    })
    
    const handleSubmit = async (values, actions) => {
        if (currentStep === steps.length - 1) {
          console.log(values)
          const response = await axios.post('https://daltin-ai-8d5v.vercel.app/register',values);
          if(response.status === 200){
            alert('Registration submitted successfully!')
            setSubmittedValues(values)
            setIsSubmitted(true)
          }else{
            alert(response.data.err);
          }
          actions.setSubmitting(false)
        } else {
            console.log(values)
            console.log(currentStep)
          actions.setTouched({})
          actions.setSubmitting(false)
          nextStep()
        }
      }

      const renderStep = (props) => {
        switch (currentStep) {
          case 0:
            return <Welcome />
          case 1:
            return <Personal {...props} />
          case 2:
            return <Address {...props} />
          case 3:
            return <Academic {...props} />
          case 4:
            return <Education {...props}/>
          case 5:
            return <Backgroundinfo {...props} />
          case 6:
            return <Uploaddocs {...props} />
          case 7:
            return <Finalreview {...props} setCurrentStep={setCurrentStep} />
          default:
            return null
        }
      }    

      if (isSubmitted) {
        return <Confirmation values={submittedValues} />
      }

  return (
    <div className='md:flex gap-10 items-center px-3 '>
        <Sidebar currentStep={currentStep}/>
        <div className="w-full px-3 max-h-screen overflow-y-auto">
            <Formik initialValues={initialValues} validationSchema={validationSchemas[currentStep]} onSubmit={handleSubmit} >
            {(formikProps) => (
              <Form>
                {/* <div className="w-20 h-20 bg-red-900">{initialValues[currentStep].title}</div> */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStep(formikProps)}
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors flex items-center"
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="mr-2" size={20} />
                    Previous
                  </button>
                  {currentStep < steps.length - 1 ? (
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors flex items-center"
                    >
                      Next
                      <ChevronRight className="ml-2" size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            )}

            </Formik>
        </div>
    </div>
  )
}

export default Home