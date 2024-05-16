import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BussinessType from './ManageControlPages/BussinessType';
import ManControl from './ManageControlPages/ManControl';
import Stepper from '../globalComponents/Stepper';


const ManageControl = () => {

  const dispatch = useDispatch()
  const { sideBar, formToDisplayManagement, managementCtrlStepper } = useSelector((store) => store.displayPage);

  const defaultSteps = [
    { label: "Business Type", completed: managementCtrlStepper.busType },
    { label: "Management & Controls", completed: managementCtrlStepper.managementCtrl },
  ];

  return (
    <div className='bg-white w-full flex flex-col min-h-full h-full'>
      <Stepper data={defaultSteps} />
      <div className='bg-white w-full flex flex-col min-h-full h-full justify-between'>
        {(formToDisplayManagement === 'Business Type') && <BussinessType />}
        {(formToDisplayManagement === 'Man Control') && <ManControl />}
      </div>
    </div>
  )
}

export default ManageControl