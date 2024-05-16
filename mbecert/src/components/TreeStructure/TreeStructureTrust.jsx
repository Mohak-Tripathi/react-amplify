import React from 'react'
import CompanyLogo from '../../assests/images/Comp.svg'
import Edit from '../../assests/images/Edit.svg'

export default function TreeStructureTrust({ isEdit, individualName }) {
    return (
        <div className="w-[400px] h-[52px] bg-white border border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="p-4 bg-indigo-50 justify-start items-center gap-2 flex">
                <div className="w-5 h-5 relative" >
                    <img src={CompanyLogo} alt="CompanyLogo" />
                </div>
            </div>
            <div className="grow shrink basis-0 h-5 pl-2.5 pr-8 rounded-lg justify-start items-center gap-2 flex">
                <div className="grow shrink basis-0 text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">{individualName}</div>
            </div>
            {isEdit === true &&
                <div className="p-2 rounded-md justify-center items-center gap-0.5 flex">
                    <div className="w-[18px] h-[18px] relative" >
                        <img src={Edit} alt="EditIcon" />
                    </div>
                </div>
            }
        </div>
    )
}

TreeStructureTrust.defaultProps = {
    isEdit: false
}