import React from 'react'
import Uploadfield from './Uploadfield';

const Uploaddocs = ({ setFieldValue,formikValues }) => {

  const onDrop = (acceptedFiles, rejectedFiles, fieldName) => {
    if (acceptedFiles.length > 0) {
      setFieldValue(fieldName, acceptedFiles[0]);
    }
  };

  const fields = [
    { name: 'tenthMarksheet', label: '10th Marksheet' },
    { name: 'twelfthMarksheet', label: '12th Marksheet' },
    { name: 'passport', label: 'Passport' },
    { name: 'englishProficiency', label: 'English Proficiency Test Certificate' },
    { name: 'sop', label: 'Statement of Purpose (SOP)' },
    { name: 'cv', label: 'CV' },
    { name: 'experience', label: 'Experience (if applicable)' },
    { name: 'bachelorsDegree', label: "Bachelor's Degree (for Master's applicants)" },
  ];


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <Uploadfield key={field.name} field={field} setFieldValue={setFieldValue} formikValues={formikValues} />
        ))}
      </div>
    </div>
  )
}

export default Uploaddocs