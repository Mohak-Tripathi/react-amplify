import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from '../../globalComponents/SectionTitle'
import Label from '../../globalComponents/Label'
import Label2 from '../../globalComponents/Label2'
import InputField from '../../globalComponents/InputField'
// import UploadInp from '../../globalComponents/UploadInp'
import { useDispatch } from "react-redux";


import btIcon1 from '../../assests/images/icons/bt1.png'
import btIcon2 from '../../assests/images/icons/bt2.png'
import btIcon3 from '../../assests/images/icons/bt3.png'
import btIcon4 from '../../assests/images/icons/bt4.png'
import btIcon5 from '../../assests/images/icons/bt5.png'
import btIcon6 from '../../assests/images/icons/bt6.png'
import btIcon7 from '../../assests/images/icons/bt7.png'
import btIcon8 from '../../assests/images/icons/bt8.png'
import plusIcon from '../../assests/images/icons/Plus.svg'

import { Autocomplete, TextField } from '@mui/material'
import FormFooter from '../../globalComponents/FormFooter';
import { changeFormToDisplayManagement, changeSideBar } from '../../features/displayPage/displayPageSlice';

const BussinessType = () => {

  const dispatch = useDispatch();
  const [selectedBussType, setSelectedBussType] = useState(null);
  const [visibleDiv, setVisibleDiv] = useState('manCon1')

  // business type select 
  const handleBussTypeChange = (businessType) => {
    setSelectedBussType(businessType);
  }

  //YOUR BUSINESS TYPE
  //Broker
  //Vendor/Supplier Name
  // const [vendorNameList, setVendorNameList] = useState([{ id: 1, name: '' }]);
  // const vendorNameListChange = (e, id) => {
  //   const updatedVendorList = vendorNameList.map((vendor) =>
  //     vendor.id === id ? { ...vendor, name: e.target.value } : vendor
  //   );
  //   setVendorNameList(updatedVendorList);
  // };
  // const addMoreVendorName = () => {
  //   const newId = vendorNameList.length + 1;
  //   setVendorNameList([...vendorNameList, { id: newId, name: '' }]);
  // };

  // const deleteVendorName = (id) => {
  //   const updatedVendorList = vendorNameList.filter((vendor) => vendor.id !== id);
  //   setVendorNameList(updatedVendorList);
  // };

  // //Vendor/Supplier Speciality
  // const [venSpecList, setVenSpecList] = useState([{ id: 1, name: '' }]);
  // const venSpecListChange = (e, id) => {
  //   const updatedVenSpecList = venSpecList.map((vendor) =>
  //     vendor.id === id ? { ...vendor, name: e.target.value } : vendor
  //   );
  //   setVenSpecList(updatedVenSpecList);
  // };

  // const addMoreVenSpec = () => {
  //   const newId = venSpecList.length + 1;
  //   setVenSpecList([...venSpecList, { id: newId, name: '' }]);
  // }

  // const deleteVenSpec = (id) => {
  //   const updatedVenSpecList = venSpecList.filter((vendor) => vendor.id !== id);
  //   setVenSpecList(updatedVenSpecList);
  // };

  const [vendorList, setVendorList] = useState([
    { id: 1, name: '', speciality: '' }, // Initial row
  ]);

  const handleAddMoreVendor = () => {
    setVendorList([
      ...vendorList,
      { id: Date.now(), name: '', speciality: '' },
    ]);
  };

  const handleDeleteVendor = (id) => {
    const updatedList = vendorList.filter((item) => item.id !== id);
    setVendorList(updatedList);
  };

  const vendorListChange = (id, field, value) => {
    const updatedList = vendorList.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setVendorList(updatedList);
  };




  // Construction Contractor
  // Is Company Bonded?
  const [compBondRadio, setCompBondRadio] = useState('btBonded_No')
  const [bondedInpVisible, setBondedInpVisible] = useState(false)
  const handleCompBondRadio = (e) => {
    const selectedRadio = e.target.id;
    setCompBondRadio(selectedRadio)

    if (selectedRadio === 'btBonded_Yes') {
      setBondedInpVisible(true);
    } else {
      setBondedInpVisible(false);
      bondedCompList.length = 1;
    }
  }

  const [bondedCompList, setBondedCompList] = useState([{ id: 1, name: '' }])
  const bondedCompListChange = (e, id) => {
    const updatedBondedCompList = bondedCompList.map((bondedComp) =>
      bondedComp.id === id ? { ...bondedComp, name: e.target.value } : bondedComp
    );
    setBondedCompList(updatedBondedCompList);
  };

  const addMoreBondedComp = () => {
    const newid = bondedCompList.length + 1;
    setBondedCompList([...bondedCompList, { id: newid, name: '' }]);
  };

  const deleteBondedComp = (id) => {
    const updatedBondedCompList = bondedCompList.filter((bondedComp) => bondedComp.id !== id);
    setBondedCompList(updatedBondedCompList);
  };

  // Distributors
  // warehouse space radio
  const [wareSpaceRadio, setWareSpaceRadio] = useState('btWarehouse_No')
  const handlewareSpaceRadio = (e) => {
    const selectedRadio = e.target.id;
    setWareSpaceRadio(selectedRadio)
  }

  //Value of Inventory
  const [invenValue, setInvenValue] = useState('');
  const invenValueChange = (e) => {
    setInvenValue(e.target.value);
  }

  //Manufacturer
  const [manufacEquipmentList, setManufacEquipmentList] = useState([
    { equipName: '', equipType: '', equipYour: '' },
  ]);

  const manufacEquipAddMore = () => {
    setManufacEquipmentList((preSession) => [
      ...preSession,
      { equipName: '', equipType: '', equipYour: '' }
    ])
  };

  const manufacEquipDelete = (index) => {
    setManufacEquipmentList((prevSession) => prevSession.filter((_, i) => i !== index));
  };

  const manufacEquipInputChange = (index, fieldName, value) => {
    const updatedSession = [...manufacEquipmentList];
    updatedSession[index][fieldName] = value;
    setManufacEquipmentList(updatedSession);
  };

  //Manufacturer rep
  const [manufacturerList, setManufacturerList] = useState([
    { id: 1, name: '', speciality: '' }, // Initial row
  ]);

  const handleAddMoreManufacturer = () => {
    setManufacturerList([
      ...manufacturerList,
      { id: Date.now(), name: '', speciality: '' },
    ]);
  };

  const handleDeleteManufacturer = (id) => {
    const updatedList = manufacturerList.filter((item) => item.id !== id);
    setManufacturerList(updatedList);
  };

  const handleManufacturerInputChange = (id, field, value) => {
    const updatedList = manufacturerList.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setManufacturerList(updatedList);
  };

  //Transportation
  // Do you Work as a Broker?
  const [workBrokerRadio, setWorkBrokerRadio] = useState('btWrkBrker_No')
  const [serviceFleetVisible, setServiceFleetVisible] = useState(false)
  const handleworkBrokerRadio = (e) => {
    const selectedRadio = e.target.id;
    setWorkBrokerRadio(selectedRadio)

    if (selectedRadio === 'btWrkBrker_Yes') {
      setServiceFleetVisible(true);
    } else {
      setServiceFleetVisible(false);
    }
  }

  // Do you also Provide Services using your own Fleet?
  const [servFleetRadio, setServFleetRadio] = useState('')
  const handleServFleetRadio = (e) => {
    const selectedRadio = e.target.id;
    setServFleetRadio(selectedRadio)
  }

  //Is your Equipment?
  const [equiprRadio, setEquiprRadio] = useState('')
  const handleEquiprRadio = (e) => {
    const selectedRadio = e.target.id;
    setEquiprRadio(selectedRadio)
  }

  //Indicate the type of equipment
  const [transEquipType, setTransEquipType] = useState([]);
  const transEquipTypeChange = (event, value) => {
    setTransEquipType(value);
  }

  //Tractor/Semi 1
  const [transSemi1, setTransSemi1] = useState('');
  const transSemi1Change = (e) => {
    setTransSemi1(e.target.value);
  }

  //Tractor/Semi 2
  const [transSemi2, setTransSemi2] = useState('');
  const transSemi2Change = (e) => {
    setTransSemi2(e.target.value);
  }

  // dropdown data 
  // Manufacturer
  const equipmentData = ['Leased', 'Owned', 'Both'];

  // Transportation
  const transEquipTypeData = ['Tractor/Semi', 'Sprinter Van', 'Other', 'Dry Van', 'Reefer', 'Flat Bed', 'Rollerbed', 'Tank', 'Team Drivers', 'Hazmat Certification', 'Tracking'];

  // ------------------------------------------------------------

  const handleNext = () => {
    dispatch(changeFormToDisplayManagement({ formName: "Man Control", step: "next" }));
  }

  const handleReturn = () => {
    dispatch(changeSideBar({ sideBarName: "Business Info" }));
  }

  return (

    <div className=' bg-white w-full flex flex-col min-h-full h-full justify-between'>
      <div className='px-8 pb-8 pt-2 bg-white w-full flex flex-col gap-8'>
        {/* form progress bar/tab start */}
        {/* <div className='flex items-center text-sm gap-4 w-full justify-between'>
          <div className='flex gap-1 items-center'>
            <p className='bg-[#0045AC] text-white w-8 h-8 rounded-full flex items-center justify-center'>1</p>
            <p>Business Type</p>
          </div>
          <div className=' border-[#D9D9D9] w-[60%] border'></div>
          <div className='flex gap-1 items-center'>
            <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>2</p>
            <p>Management & Controls</p>
          </div> */}
        {/* <div className=' border-[#D9D9D9] w-1/4 border'></div>
                        <div className='flex gap-1 items-center'>
                            <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>3</p>
                            <p>Upload Documents</p>
                        </div> */}
        {/* </div> */}
        {/* form progress bar/tab end */}
        <div className=' border-[#D4D4D4] w-full border'></div>
        {/* YOUR BUSINESS TYPE start  */}
        <div className='flex flex-col gap-6' style={{ display: visibleDiv === 'manCon1' ? 'flex' : 'none' }}>
          <SectionTitle title='YOUR BUSINESS TYPE' />
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-4'>
              <Label text='Select your business type (Select one)' />
              <div className='flex gap-2 flex-wrap'>
                <div className='flex gap-2 cursor-pointer' role='button'>
                  <label htmlFor='Broker' className={`border ${selectedBussType === 'Broker' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 cursor-pointer`}>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Broker' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Broker')} />
                      <img src={btIcon1} alt="" width='20px' />
                      Broker
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Construction' className={`border ${selectedBussType === 'Construction' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Construction' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Construction')} />
                      <img src={btIcon2} alt="" width='20px' />
                      Construction Contractor
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Consultants' className={`border ${selectedBussType === 'Consultants' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Consultants' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Consultants')} />
                      <img src={btIcon3} alt="" width='20px' />
                      Consultants/ Professional
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Distributors' className={`border ${selectedBussType === 'Distributors' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Distributors' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Distributors')} />
                      <img src={btIcon4} alt="" width='20px' />
                      Distributors
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Manufacturer' className={`border ${selectedBussType === 'Manufacturer' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Manufacturer' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Manufacturer')} />
                      <img src={btIcon5} alt="" width='20px' />
                      Manufacturer
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Manufacturer_Rep' className={`border ${selectedBussType === 'Manufacturer_Rep' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Manufacturer_Rep' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Manufacturer_Rep')} />
                      <img src={btIcon6} alt="" width='20px' />
                      Manufacturer Rep
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Service' className={`border ${selectedBussType === 'Service' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Service' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Service')} />
                      <img src={btIcon7} alt="" width='20px' />
                      Service Contractor
                    </div>
                  </label>
                </div>

                <div className='flex gap-2'>
                  <label htmlFor='Transportation' className={`border ${selectedBussType === 'Transportation' ? 'bg-[#C4F683]' || 'border-[#C4F683]' : 'bg-white' && 'border-[#B8B8B8]'} text-[#141F58] w-[120px] max-h-fit text-sm relative p-3 `} role='button'>
                    <div className='flex gap-8 flex-col justify-between flex-wrap' >
                      <input id='Transportation' type='radio' name='btRadio' className='absolute z-[-10]' onChange={() => handleBussTypeChange('Transportation')} />
                      <img src={btIcon8} alt="" width='20px' />
                      Transportation
                    </div>
                  </label>
                </div>

              </div>
            </div>
            {/* for Broker/ Agents start  */}
            {/* <div className='flex gap-8 w-full' id='BrokerForm' style={{ display: selectedBussType === 'Broker' ? 'flex' : 'none' }}>
                <div className='w-1/2 flex flex-col gap-2'>
                  <Label text='Vendor/Supplier Name' />
                  {vendorNameList.map((vendor, index) => (
                    <div key={`vendorName_${vendor.id}`} className='flex gap-1 items-center'>
                      <InputField type={'text'} placeholder={'Enter Vendor/ Supplier Name'} name={`Vendor_Name_${vendor.id}`} onChange={(e) => vendorNameListChange(e, vendor.id)}
                        value={vendor.name} />
                      {index > 0 && (
                        <RiDeleteBin6Line className='text-[red] cursor-pointer' onClick={() => deleteVendorName(vendor.id)} />
                      )}
                    </div>
                  ))}
                  <h5 id='addMoreVenName' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={addMoreVendorName}><img src={plusIcon} alt="" /> Add more</h5>
                </div>
                <div className='w-1/2 flex flex-col gap-2'>
                  <Label text='Vendor/Supplier Speciality' />
                  {venSpecList.map((vendor, index) => (
                    <div key={`venSpec_${vendor.id}`} className='flex gap-1 items-center'>
                      <InputField type={'text'} placeholder={'Enter Vendor/ Supplier Speciality'} name={`Vendor_Speciality_${vendor.id}`} onChange={(e) => venSpecListChange(e, vendor.id)} value={vendor.name} />
                      {index > 0 && (
                        <RiDeleteBin6Line className='text-[red] cursor-pointer' onClick={() => deleteVenSpec(vendor.id)} />
                      )}
                    </div>
                  ))}
                  <h5 id='addMoreFacility' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={addMoreVenSpec}><img src={plusIcon} alt="" /> Add more</h5>
                </div>
              </div> */}
            <div className='flex flex-col gap-4 w-full' id='BrokerForm' style={{ display: selectedBussType === 'Broker' ? 'flex' : 'none' }}>
              <div className='flex gap-6 w-full'>
                <div className='w-1/2'>
                  <Label text='Vendor/Supplier Name' />
                </div>
                <div className='w-1/2'>
                  <Label text='Vendor/Supplier Speciality' />
                </div>
              </div>

              {vendorList.map((vendor, index) => (
                <div key={vendor.id} className='flex gap-6 w-full items-center'>
                  <div className='w-1/2'>
                    <InputField
                      placeholder={'Enter Vendor/ Supplier Name'}
                      type={'text'}
                      name={'Vendor_Name'}
                      onChange={(e) =>
                        vendorListChange(
                          vendor.id,
                          'name',
                          e.target.value
                        )
                      }
                      value={vendor.name}
                    />
                  </div>
                  <div className='w-1/2'>
                    <InputField
                      placeholder={'Enter Vendor/ Supplier Speciality'}
                      type={'text'}
                      name={'Vendor_Speciality'}
                      onChange={(e) =>
                        vendorListChange(
                          vendor.id,
                          'speciality',
                          e.target.value
                        )
                      }
                      value={vendor.speciality}
                    />
                  </div>
                  {(index > 0 &&
                    <RiDeleteBin6Line
                      className='text-[red] cursor-pointer'
                      onClick={() => handleDeleteVendor(vendor.id)}
                    />
                  )}
                </div>
              ))}

              <h5
                id='addMoreFacility'
                className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2'
                onClick={handleAddMoreVendor}
              >
                <img src={plusIcon} alt='' /> Add more
              </h5>
            </div>
            {/* for Broker/ Agents end  */}
            {/* for Construction Contractor start  */}
            <div className='flex flex-col gap-3 w-full' id='ConstructionForm' style={{ display: selectedBussType === 'Construction' ? 'flex' : 'none' }}>
              <Label text="Is Company Bonded?" />
              <div className='flex gap-4'>
                <div className="flex items-center h-6">
                  <input id="btBonded_Yes" type="radio" value="btBonded_Yes" name="btBonded_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleCompBondRadio} checked={compBondRadio === 'btBonded_Yes'}
                  />
                  <label htmlFor="btBonded_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                </div>
                <div className="flex items-center h-6">
                  <input id="btBonded_No" type="radio" value="btBonded_No" name="btBonded_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleCompBondRadio} checked={compBondRadio === 'btBonded_No'}
                  />
                  <label htmlFor="btBonded_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                </div>
              </div>
              {bondedInpVisible && (
                <div>
                  <Label2 text={'Bonding Company Name'} /> <span className='text-sm text-[#525866]'>(can add upto 3 companies)</span>
                  {bondedCompList.map((vendor, index) => (
                    <div key={`bondedComp_${vendor.id}`} className='flex gap-1 items-center mt-2'>
                      <InputField name={'bonding_Comp_Name'} placeholder={'Enter Bonding Company Name'} type={'text'} onChange={(e) => bondedCompListChange(e, vendor.id)} value={vendor.name} />
                      {index > 0 && (
                        <RiDeleteBin6Line className='text-[red] cursor-pointer' onClick={() => deleteBondedComp(vendor.id)} />
                      )}
                    </div>
                  ))}
                  {bondedCompList.length < 3 && (
                    <h5 id='addMoreFacility' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={addMoreBondedComp}><img src={plusIcon} alt="" /> Add more</h5>
                  )}
                </div>
              )}
            </div>
            {/* for Construction Contractor end  */}
            {/* for Consultants/ Professional  start  */}
            <div className='flex flex-col gap-3 w-full' id='ConsultantsForm' style={{ display: selectedBussType === 'Consultants' ? 'flex' : 'none' }}>

            </div>
            {/* for Consultants/ Professional  end  */}
            {/* for Distributors  start  */}
            <div className='flex gap-3 w-full' id='DistributorsForm' style={{ display: selectedBussType === 'Distributors' ? 'flex' : 'none' }}>
              <div className='w-1/2'>
                <Label text="Do you own or lease warehouse space?" required='*' />
                <div className='flex gap-4 mt-2'>
                  <div className="flex items-center h-6">
                    <input id="btWarehouse_Yes" type="radio" value="btWarehouse_Yes" name="btWarehouse_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handlewareSpaceRadio} checked={wareSpaceRadio === 'btWarehouse_Yes'}
                    />
                    <label htmlFor="btWarehouse_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                  </div>
                  <div className="flex items-center h-6">
                    <input id="btWarehouse_No" type="radio" value="btWarehouse_No" name="btWarehouse_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handlewareSpaceRadio} checked={wareSpaceRadio === 'btWarehouse_No'}
                    />
                    <label htmlFor="btWarehouse_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                  </div>
                </div>
              </div>
              <div className='w-1/2 flex flex-col gap-2'>
                <Label text='Value of Inventory' />
                <InputField type={'number'} placeholder={'Enter Amount'} name={'Value_of_Inventory'} onChange={(e) => invenValueChange(e)} value={invenValue} />
              </div>
            </div>
            {/* for Distributors  end  */}
            {/* for Manufacturer  start  */}
            <div className='flex flex-col gap-4 w-full' id='ManufacturerForm' style={{ display: selectedBussType === 'Manufacturer' ? 'flex' : 'none' }}>
              <Label text='Provide List of Primary Equipment that is Leased or Owned' />
              <div className='w-full'>
                <div className='flex gap-6 w-full items-center'>
                  <div className='w-1/3'>
                    <Label2 text='Equipment Name' />
                  </div>
                  <div className='w-1/3'>
                    <Label2 text='Equipment Type' />
                  </div>
                  <div className='w-1/3'>
                    <Label2 text='Are your Equipments?' />
                  </div>
                </div>
              </div>
              {manufacEquipmentList.map((equipment, index) => (
                <div key={`manufacEquip_${index}`} className='w-full'>
                  <div className='flex gap-6 w-full items-center'>
                    <div className='w-1/3'>
                      <InputField
                        placeholder={'Enter Equipment Name'}
                        type={'text'}
                        name={'equipName'}
                        onChange={(e) => manufacEquipInputChange(index, 'equipName', e.target.value)}
                        value={manufacEquipmentList.equipName}
                      />
                    </div>
                    <div className='w-1/3'>
                      <InputField
                        placeholder={'Enter Equipment Type'}
                        type={'text'}
                        name={'equipType'}
                        onChange={(e) => manufacEquipInputChange(index, 'equipType', e.target.value)}
                        value={manufacEquipmentList.equipType}
                      />
                    </div>
                    <div className='w-1/3'>
                      {/* <InputField
                                                    placeholder={'Select option'}
                                                    type={'text'}
                                                    name={'Equipment_Your'}
                                                    onChange={(e) => manufacEquipInputChange(index, 'your', e.target.value)}
                                                    value={equipment.your}
                                                /> */}
                      <Autocomplete
                        name={'equipYour'}
                        onChange={(e) => manufacEquipInputChange(index, 'equipYour', e.target.value)} value={manufacEquipmentList.equipYour}
                        className='w-full'
                        disablePortal
                        id="Equipment_Your"
                        options={equipmentData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Equipment'
                        />}
                      />
                    </div>
                    {index > 0 && (
                      <RiDeleteBin6Line className='text-[red] cursor-pointer' onClick={() => manufacEquipDelete(index)} />
                    )}
                  </div>
                </div>
              ))}
              <h5 className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={manufacEquipAddMore}>
                <img src={plusIcon} alt="" /> Add more
              </h5>
            </div>
            {/* for Manufacturer  end  */}
            {/* for Manufacturer Rep  start  */}
            <div className='flex flex-col gap-4 w-full' id='ManufacturerRepForm' style={{ display: selectedBussType === 'Manufacturer_Rep' ? 'flex' : 'none' }}>
              <Label text='List of Manufaturers' />
              <div className='flex gap-6 w-full'>
                <div className='w-1/2'>
                  <Label2 text='Name of the Manufacturer' />
                </div>
                <div className='w-1/2'>
                  <Label2 text='Speciality of the Manufacturer' />
                </div>
              </div>

              {manufacturerList.map((manufacturer, index) => (
                <div key={manufacturer.id} className='flex gap-6 w-full items-center'>
                  <div className='w-1/2'>
                    <InputField
                      placeholder={'Enter Name of Manufacturer'}
                      type={'text'}
                      name={'Manufacturer_Name'}
                      onChange={(e) =>
                        handleManufacturerInputChange(
                          manufacturer.id,
                          'name',
                          e.target.value
                        )
                      }
                      value={manufacturer.name}
                    />
                  </div>
                  <div className='w-1/2'>
                    <InputField
                      placeholder='Enter Speciality'
                      type={'text'}
                      name={'Manufacturer_Speciality'}
                      onChange={(e) =>
                        handleManufacturerInputChange(
                          manufacturer.id,
                          'speciality',
                          e.target.value
                        )
                      }
                      value={manufacturer.speciality}
                    />
                  </div>
                  {(index > 0 &&
                    <RiDeleteBin6Line
                      className='text-[red] cursor-pointer'
                      onClick={() => handleDeleteManufacturer(manufacturer.id)}
                    />
                  )}
                </div>
              ))}

              <h5
                id='addMoreFacility'
                className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2'
                onClick={handleAddMoreManufacturer}
              >
                <img src={plusIcon} alt='' /> Add more
              </h5>
            </div>
            {/* for Manufacturer Rep  end  */}
            {/* for Service Contractor  start  */}
            <div className='flex flex-col gap-4 w-full' id='ServiceForm' style={{ display: selectedBussType === 'Service' ? 'flex' : 'none' }}>

            </div>
            {/* for Service Contractor  end  */}
            {/* for Transportation  start  */}
            <div className='flex flex-col gap-12 w-full' id='TransportationForm' style={{ display: selectedBussType === 'Transportation' ? 'flex' : 'none' }}>
              <div className='flex gap-8'>
                <div className='w-1/2'>
                  <Label text="Do you Work as a Broker?" />
                  <div className='flex gap-4 mt-2'>
                    <div className="flex items-center h-6">
                      <input id="btWrkBrker_Yes" type="radio" value="btWrkBrker_Yes" name="btWrkBrker_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleworkBrokerRadio} checked={workBrokerRadio === 'btWrkBrker_Yes'}
                      />
                      <label htmlFor="btWrkBrker_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                    </div>
                    <div className="flex items-center h-6">
                      <input id="btWrkBrker_No" type="radio" value="btWrkBrker_No" name="btWrkBrker_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleworkBrokerRadio} checked={workBrokerRadio === 'btWrkBrker_No'}
                      />
                      <label htmlFor="btWrkBrker_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                    </div>
                  </div>
                </div>
                {serviceFleetVisible && (
                  <div className='w-1/2'>
                    <Label2 text="Do you also Provide Services using your own Fleet?" />
                    <div className='flex gap-4 mt-2'>
                      <div className="flex items-center h-6">
                        <input id="btOwnFleet_Yes" type="radio" value="btOwnFleet_Yes" name="btOwnFleet_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleServFleetRadio} checked={servFleetRadio === 'btOwnFleet_Yes'}
                        />
                        <label htmlFor="btOwnFleet_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                      </div>
                      <div className="flex items-center h-6">
                        <input id="btOwnFleet_No" type="radio" value="btOwnFleet_No" name="btOwnFleet_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleServFleetRadio} checked={servFleetRadio === 'btOwnFleet_No'}
                        />
                        <label htmlFor="btOwnFleet_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Label text="Is your Equipment?" />
                <div className='flex gap-4 mt-2'>
                  <div className="flex items-center h-6">
                    <input id="btYrEqp_Owned" type="radio" value="btYrEqp_Owned" name="btYrEqp_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleEquiprRadio} checked={equiprRadio === 'btYrEqp_Owned'}
                    />
                    <label htmlFor="btYrEqp_Owned" className="ms-2 text-sm text-black dark:text-gray-300">Owned</label>
                  </div>
                  <div className="flex items-center h-6">
                    <input id="btYrEqp_Leased" type="radio" value="btYrEqp_Leased" name="btYrEqp_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleEquiprRadio} checked={equiprRadio === 'btYrEqp_Leased'}
                    />
                    <label htmlFor="btYrEqp_Leased" className="ms-2 text-sm text-black dark:text-gray-300">Leased</label>
                  </div>
                  <div className="flex items-center h-6">
                    <input id="btYrEqp_AllAbv" type="radio" value="btYrEqp_AllAbv" name="btYrEqp_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleEquiprRadio} checked={equiprRadio === 'btYrEqp_AllAbv'}
                    />
                    <label htmlFor="btYrEqp_AllAbv" className="ms-2 text-sm text-black dark:text-gray-300">All of the Above</label>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <Label text='Indicate the type of equipment' />
                  {/* <InputField placeholder={'select'} type={'text'} name={'transEquipType'} onChange={(e) => transEquipTypeChange(e)} value={transEquipType} /> */}
                  <Autocomplete
                    multiple
                    name={'transEquipType'}
                    id="transEquipType"
                    options={transEquipTypeData}
                    value={transEquipType}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    onChange={transEquipTypeChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                        borderRadius: 0,
                        height: '2.8rem',
                        fontSize: "0.875rem",
                        padding: '5px 4px 7.5px 5px',
                        color: ' rgb(100 116 139)',
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9", // Change color on hover
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #BCBCBC", // Change color on focus
                        },
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                      },
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={transEquipType.length > 0 ? '' : 'Select'}
                      />
                    )}
                  />
                </div>
                <div className='flex gap-8 w-full'>
                  <div className='w-1/2 flex flex-col gap-2'>
                    <Label2 text='Tractor/Semi' />
                    <InputField placeholder={'Mention How Many?'} type={'text'} name={'tracSemi1'} onChange={(e) => transSemi1Change(e)} value={transSemi1} />
                  </div>
                  <div className='w-1/2 flex flex-col gap-2'>
                    <Label2 text='Tractor/Semi' />
                    <InputField placeholder={'Mention How Many?'} type={'text'} name={'tracSemi2'} onChange={(e) => transSemi2Change(e)} value={transSemi2} />
                  </div>
                </div>
              </div>
            </div>
            {/* for Transportation  end  */}
          </div>
        </div>
        {/* YOUR BUSINESS TYPE end  */}
      </div>
      <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} prevText={'Previous: Business Information'} actionReturn={changeSideBar({ sideBarName: "Business Info" })} actionNext={changeFormToDisplayManagement({ formName: "Man Control" })} />
    </div>

  )
}

export default BussinessType