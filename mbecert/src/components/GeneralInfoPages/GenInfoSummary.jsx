import React from 'react'
import SumSecHeader from '../../globalComponents/SumSecHeader'
import SumLabel from '../../globalComponents/SumLabel'
import SumSubTitle from '../../globalComponents/SumSubTitle'
import SumData from '../../globalComponents/SumData'

const GenInfoSummary = () => {
    return (
        <div className='flex flex-col gap-2 bg-[#E8EBEE]'>
            <div>
                <SumSecHeader text={'General Business Information'} />
                <SumSubTitle subTitle={'BUSINESS INFORMATION'} />
                <div className='bg-white px-4 py-4 flex flex-col gap-6'>
                    <div className='w-full flex gap-12'>
                        <div className='w-1/2 flex justify-between'>
                            <SumLabel labelText={'Company Name'} />
                            <SumData data={'ABC CorporationABC CorporationABC CorporationABC CorporationABC Corporation'} />
                        </div>
                        <div className='w-1/2 flex justify-between'>
                            <SumLabel labelText={'Company has a DBA'} />
                            <SumData data={'Yes'} />
                        </div>
                    </div>
                    <div className='w-full flex gap-12'>
                        <div className='w-1/2 flex justify-between'>
                            <SumLabel labelText={'Doing Business As'} />
                            <SumData data={'ABC Corporation'} />
                        </div>
                        <div className='w-1/2 flex justify-between'>
                            <SumLabel labelText={'Company Name'} />
                            <SumData data={'ABC Corporation'} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SumSecHeader text={'Contact Information'} />
                <div className='bg-white px-4 py-2'>
                    hello
                </div>
            </div>
        </div>
    )
}

export default GenInfoSummary