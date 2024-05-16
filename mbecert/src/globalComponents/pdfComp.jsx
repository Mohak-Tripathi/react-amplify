import React from 'react'
import Close from '../assests/images/icons/X.png'
import PDF from '../assests/images/icons/pdf.png';

const PdfComp = (props) => {
    const handleRemove = (props) => {
        console.log(props);
        props.onRemove(props.name);
    };
    return (
        <>
            <div className="flex-col justify-start items-start inline-flex">
                <div className="h-[72px] pl-3.5 pr-4 py-4 bg-white border border-zinc-200 flex-col justify-center items-start gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                        <div className="w-10 h-10 relative">
                            <img src={PDF} alt="pdf-icon" />
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                <div className="text-gray-950 text-sm font-normal font-['Degular Demo'] leading-tight">{props.name}</div>
                            </div>
                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                <div className="text-neutral-400 text-xs font-normal font-['Degular Demo'] leading-none">{props.size} kb </div>
                                <div className="text-gray-600 text-xs font-normal font-['Inter'] leading-none">∙</div>
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-neutral-400 text-xs font-normal font-['Degular Demo'] leading-none">Uploaded on {props.date} at {props.time}</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-0.5 rounded-md justify-center items-center gap-0.5 flex" onClick={() => handleRemove(props)}>
                            <div className="w-5 h-5 relative cursor-pointer" >
                                <img src={Close} alt='close' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

PdfComp.defaultProps = {
    name: "Certified",
    size: "NA",
    date: "NA",
    time: "NA"
}


export default PdfComp