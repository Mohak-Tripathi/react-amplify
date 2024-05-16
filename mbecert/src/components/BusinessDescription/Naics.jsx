import React, { useState } from 'react'
import Stepper from './StepperBusDesc'
import Label from '../../globalComponents/Label'
import SectionTitle from '../../globalComponents/SectionTitle'
import TextField from '@mui/material/TextField'
import InputField from '../../globalComponents/InputField'
import { Autocomplete } from '@mui/material'
import { useDispatch } from "react-redux";
import '../General.css'
import BusinessInputField from '../../globalComponents/BusinessInputField'
import FormFooter from '../../globalComponents/FormFooter'
import { changeFormToDisplayBusinessDesc } from '../../features/displayPage/displayPageSlice'


export default function Naics() {

    const dispatch = useDispatch();
    // Data handling variable(storing data)
    const [primaryNAICSValues, setPrimaryNAICSValues] = useState([]);
    const [naicsValues, setNaicsValues] = useState([]);
    const [nmsdcDesignationValues, setNmsdcDesignationValues] = useState([]);
    const [primaryIndustry, setPrimaryIndustry] = useState('');
    const [unspscValues, setUnspscValues] = useState([]);
    const [nmsdcDesignationSponsorValue, setNmsdcDesignationSponsorValue] = useState('');
    const [segmentation, setSegmentation] = useState();


    // options values for multiselect
    const primaryNAICS = ["111110 - Soybean Farming", "111120 - Oilseed (except Soybean) Farming", "111130 - Dry Pea and Bean Farming", "111140 - Wheat Farming", "111150 - Corn Farming"];
    const nmsdcDesignation = ["Cyber Ready", "Corporate Plus"];

    // limits for the options
    const maxSelectionsNaics = 2
    const maxSelectionPrimaryNaics = 1;

    // functions for handling the values
    const handleNaics = (event, values) => {
        if (values.length <= maxSelectionsNaics) {
            setNaicsValues(values);
        }
    }

    const handleNaicsValues = (event, values) => {
        if (values.length <= maxSelectionPrimaryNaics) {
            setPrimaryNAICSValues(values)
        }
    }

    const handleUnspsc = (event, values) => {
        setUnspscValues(values);
    }

    const handleNmsdcDesignation = (event, values) => {
        setNmsdcDesignationValues(values);
    }

    const handlePrimaryIndustry = (value) => {
        setPrimaryIndustry(value);
    }

    const handleNmsdcDesignationSponsor = (value) => {
        setNmsdcDesignationSponsorValue(value);
    }

    const handleSegmentDesignation = (event, value) => {
        setSegmentation(value);
    }

    // navigation
    const handlePrev = () => {
        // navigate('/ownership/business-profile')
    }

    const handleNext = () => {
        dispatch(changeFormToDisplayBusinessDesc({ formName: "Business NMSDC", step: "next" }))
    }

    const handleReturn = () => {
        dispatch(changeFormToDisplayBusinessDesc({ formName: "Business Profile", step: "prev" }))
    }

    return (
        <>
            <div className='main main bg-white flex flex-col'>
                {/* <Stepper /> */}
                <div className='w-full p-8'>
                    {/* divider */}
                    <div className='divider'></div>
                    <div className='flex flex-col gap-8 pt-6'>
                        <div className='general-gap'>
                            <SectionTitle title='NAICS' />
                            <Label text='Primary NAICS' />
                            <div className='w-full'>
                                <Autocomplete
                                    multiple
                                    id="primary-naics"
                                    options={primaryNAICS}
                                    getOptionLabel={(option) => option}
                                    filterSelectedOptions
                                    getOptionDisabled={(option) =>
                                        primaryNAICSValues.length >= maxSelectionPrimaryNaics && !primaryNAICSValues.includes(option)}
                                    onChange={handleNaicsValues}
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
                                            placeholder={primaryNAICSValues.length > 0 ? '' : 'Enter Code/ Description'}
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='general-gap'>
                                <Label text='Your Primary Industry Is?' />
                                <BusinessInputField placeholder='Your Primary Industry' onChange={handlePrimaryIndustry} />
                            </div>
                            <div className='divider'></div>
                            <div className='general-gap'>
                                <div className='flex gap-3 justify-start items-center'>
                                    <Label text='NAICS' required='*' />
                                    <div className='text-sm text-blue-950'>(Max 09 codes)</div>
                                </div>
                                {/* <Autocomplete
                                    className='w-full'
                                    disablePortal
                                    id="naics"
                                    options={primaryNAICS}
                                    fullWidth={true}
                                    style={{ fontSize: 1 }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            border: "1px solid #E2E4E9",
                                            outline: 'none',
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
                                        "& .MuiAutocomplete-tag": {
                                            backgroundColor: "#4CAF50", // Green background color for selected items
                                            color: "#FFFFFF", // White text color for selected items
                                            marginRight: "8px", // Margin between selected items
                                        },
                                    }}
                                    onChange={(event, value) => setPrimaryNAICSValues(value)}
                                    renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                    />}
                                /> */}
                                <Autocomplete
                                    multiple
                                    id="naics"
                                    options={primaryNAICS}
                                    getOptionLabel={(option) => option}
                                    filterSelectedOptions
                                    onChange={handleNaics}
                                    getOptionDisabled={(option) =>
                                        naicsValues.length >= maxSelectionsNaics && !naicsValues.includes(option)}
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
                                            placeholder={naicsValues.length > 0 ? '' : 'Enter Code/ Description'}
                                        />
                                    )}
                                />
                            </div>
                            <div className='general-gap'>
                                <div className='flex gap-3 justify-start items-center'>
                                    <Label text='UNSPSC' required='*' />
                                    <div className='text-sm text-blue-950'>(Up to 5 Segments and 10 Families)</div>
                                </div>
                                <Autocomplete
                                    multiple
                                    id="naics"
                                    options={primaryNAICS}
                                    getOptionLabel={(option) => option}
                                    filterSelectedOptions
                                    onChange={handleUnspsc}
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
                                            placeholder={unspscValues.length > 0 ? '' : 'Enter Code/ Description'}
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex flex-col justify-between items-center gap-8'>
                                <div className='row1 split'>
                                    <div className="left split-gap">
                                        <Label text='NMSDC Designation' required='*' />
                                        <Autocomplete
                                            multiple
                                            id="primary-naics"
                                            options={nmsdcDesignation}
                                            getOptionLabel={(option) => option}
                                            filterSelectedOptions
                                            onChange={handleNmsdcDesignation}
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
                                                    placeholder={nmsdcDesignationValues.length > 0 ? '' : 'Enter Designation'}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="right split-gap">
                                        <Label text='NMSDC Designation Sponsor' required='*' />
                                        {/* <BusinessInputField placeholder='Enter Designation' onChange={handleNmsdcDesignationSponsor} /> */}
                                        <InputField placeholder='Enter Designation' onChange={handleNmsdcDesignationSponsor} />
                                    </div>
                                </div>

                                {/* <div className='row2 split'>
                                    <div className="left split-gap">
                                        <Label text='Primary Industry/ Segment Designation' required='*' toolTipText='The Segment Code (i.e. first two digits of the UNSPSC code) will be used to identfy your primary industry.'/>
                                        <Autocomplete
                                            className='w-full'
                                            disablePortal
                                            id="unspsc"
                                            options={primaryNAICS}
                                            fullWidth={true}
                                            style={{ fontSize: 1 }}
                                            value={segmentation}
                                            onChange={handleSegmentDesignation}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    border: "1px solid #E2E4E9",
                                                    outline: 'none',
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
                                            renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                            />}
                                        />
                                    </div>
                                    <div className="right split-gap">
                                        {/* <Label text='UNSPSC' required='*' />
                                        <Autocomplete
                                            className='w-full'
                                            disablePortal
                                            id="unspsc"
                                            options={primaryNAICS}
                                            fullWidth={true}
                                            style={{ fontSize: 1 }}
                                            onChange={(event, value) => setPrimaryNAICSValues(value)}
                                            renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                            />}
                                        /> 
                                    </div>
                                </div> 

                                {/* <div className='row3 split'>
                                    <div className="left split-gap">
                                        <Label text='UNSPSC Family Description' required='*' />
                                        <Autocomplete
                                            className='w-full'
                                            disablePortal
                                            id="unspsc"
                                            options={primaryNAICS}
                                            fullWidth={true}
                                            style={{ fontSize: 1 }}
                                            onChange={(event, value) => setPrimaryNAICSValues(value)}
                                            renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                            />}
                                        />
                                    </div>
                                    <div className="right split-gap">
                                        <Label text='UNSPSC Category Description' required='*' />
                                        <Autocomplete
                                            className='w-full'
                                            disablePortal
                                            id="unspsc"
                                            options={primaryNAICS}
                                            fullWidth={true}
                                            style={{ fontSize: 1 }}
                                            onChange={(event, value) => setPrimaryNAICSValues(value)}
                                            renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                            />}
                                        />
                                    </div>
                                </div>

                                <div className='row4 split'>
                                    <div className="left split-gap">
                                        <Label text='UNSPSC Commodity Description' required='*' />
                                        <Autocomplete
                                            className='w-full'
                                            disablePortal
                                            id="unspsc"
                                            options={primaryNAICS}
                                            fullWidth={true}
                                            style={{ fontSize: 1 }}
                                            onChange={(event, value) => setPrimaryNAICSValues(value)}
                                            renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Enter Code/ Description'
                                            />}
                                        />
                                    </div>
                                    <div className="right split-gap">
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
                <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplayBusinessDesc({ formName: "Business Profile" })} actionNext={changeFormToDisplayBusinessDesc({ formName: "Business NMSDC" })} />
            </div>
        </>
    )
}
