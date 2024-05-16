import React from 'react'

const Label2 = ({ text, required }) => {
  return (
    <>
            <label className='relative text-sm text-[#668294]'>{text} <span className="absolute top-0 left-50 text-red-500"> {required}</span></label>
        </>
  )
}

export default Label2