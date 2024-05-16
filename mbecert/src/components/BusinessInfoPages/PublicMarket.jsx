
import Label from "../../globalComponents/Label";
import InputField from "../../globalComponents/InputField";
import PdfComp from "../../globalComponents/PdfComp";


import FileUpload from '../../globalComponents/FileUpload';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";



import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";



const PublicMarket = ({handleClose, handleSave}) => {


    const { publicMarket } = useSelector((store) => store.businessInfo)
    const [isAddPdf, setAddPdf] = useState(Object.keys(publicMarket).length >= 1 ? publicMarket : {});


    const onFilesChange = (e) => {
        console.log(e)
    }

    const dispatch = useDispatch()



    return (


        <>
        <DialogTitle id="responsive-dialog-title">
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
        <>
            <div className="w-full min-h-min p-8 flex-col justify-start items-start gap-8 inline-flex bg-white">
                <div className="self-stretch h-[247px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal leading-tight" style={{ fontSize: "14px", fontFamily: "Degular" }}>PUBLIC MARKET</div>
                    <div className="self-stretch h-[204px] flex-col justify-start items-start gap-12 flex">
                        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-9 flex">
                            <div className="self-stretch h-[88px] flex-col justify-start items-start flex">
                                <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex">
                                    <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                        <div className="text-blue-950  font-normal leading-tight" style={{ fontSize: "16px", fontFamily: "Degular" }}>Name of Security Exchange where your company is listed</div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter name of Security Exchange'></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="self-stretch min-h-min flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal font-['Degular Demo'] uppercase leading-tight">Document Upload</div>
                    <div className="self-stretch h-full flex-col justify-start items-start gap-12 flex">
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        {/* <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">The SEC Form S-1 or other SEC form used in the public offering.

                                            </div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='TrustAgreement'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                 
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='TrustAgreement' />Upload</div>
                                            </div>
                                        </label> */}



                                        <div className='w-full flex flex-col gap-2'>
                                            <FileUpload label={`The SEC Form S-1 or other SEC form used in the public offering.`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`SECForPublicOffering`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                                        </div>


                                    </div>
                                    {/* <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                        <PdfComp />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


        </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Disagree
                </Button>
                <Button onClick={() => handleSave(isAddPdf, "publicMarket")} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </>
    )

}


export default PublicMarket;