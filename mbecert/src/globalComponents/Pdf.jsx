import React from 'react'
import PDF from '../../../MBECertSinglePage/src/assests/images/pdf.png'

const Pdf = (props) => {
  return (
    <>
    <div className="flex-col justify-start items-start inline-flex">
        <div className="h-[72px] pl-4 pr-5 py-5 bg-white border border-zinc-200 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 relative">
                    <img src={PDF} alt="pdf-icon" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="text-gray-950 text-sm font-normal font-['Degular Demo'] leading-tight">{props.name}.pdf</div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="text-neutral-400 text-xs font-normal font-['Degular Demo'] leading-none">{props.size} </div>
                        <div className="text-gray-600 text-xs font-normal font-['Inter'] leading-none">∙</div>
                        <div className="justify-start items-center gap-1 flex">
                            <div className="text-neutral-400 text-xs font-normal font-['Degular Demo'] leading-none">Uploaded on {props.date} at {props.time}</div>
                        </div>
                    </div>
                </div>
                <div className="p-0.5 rounded-md justify-center items-center gap-0.5 flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
        </div>
    </div>
</>
  )
}
Pdf.defaultProps = {
    name: "No Name",
    size: "NA",
    date: "NA",
    time: "NA"
}
export default Pdf