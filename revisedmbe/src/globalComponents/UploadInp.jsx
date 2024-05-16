import React from 'react'
import Cloud from '../assests/images/icons/Upload.png'

const UploadInp = () => {
  return (
    <>
      <label className='cursor-pointer' htmlFor='GovtPhoto'>
        <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
          <div className="w-5 h-5 relative" >
            <img src={Cloud} alt="" />
          </div>
          <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
        </div>
      </label>
    </>
  )
}

export default UploadInp