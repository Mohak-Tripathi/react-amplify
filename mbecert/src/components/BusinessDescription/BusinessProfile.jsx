import React, { useState } from "react";
import Upload from "../../assests/images/uplod.png";
import BG from "../../assests/images/BG.png";
import PdfComp from "../../globalComponents/PdfComp";
import SectionTitle from '../../globalComponents/SectionTitle';
import Label from '../../globalComponents/Label';
import InputField from '../../globalComponents/InputField';
import '../../components/General.css';
import BusinessInputField from '../../globalComponents/BusinessInputField';
import Stepper from "./StepperBusDesc";
import { useDispatch, useSelector } from "react-redux";
import { changeFormToDisplayBusinessDesc, changeSideBar } from "../../features/displayPage/displayPageSlice";
import FormFooter from "../../globalComponents/FormFooter";
import { Autocomplete, TextField } from "@mui/material";
import { display } from "@mui/system";
import { RiDeleteBin6Line } from 'react-icons/ri';
import FileUpload from "../../globalComponents/FileUpload";

export default function BusinessProfile() {


  // Data handling variable(storing data)
  const [rmsdcValues, setRmsdcValues] = useState([]);
  const [businessDesc, setBusinessDesc] = useState();
  const [websiteUrl, setWebsiteUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState({ field: "", state: false, value: "" });

  const onFilesChange = (e) => {
    console.log(e)
  }
  // const rmsdcLookup = ["111110 - Soybean Farming", "111120 - Oilseed (except Soybean) Farming", "111130 - Dry Pea and Bean Farming", "111140 - Wheat Farming", "111150 - Corn Farming"];

  const rmsdcLookup = ["111110 - Soybean Farming", "111120 - Oilseed (except Soybean) Farming", "111130 - Dry Pea and Bean Farming", "111140 - Wheat Farming", "111150 - Corn Farming"];

  const { businessprofile } = useSelector((store) => store.businessprofile);
  // functions for handling values
  const handleFileChange = (event) => {
    const videoFile = event.target.files[0];

    const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    if (videoFile && allowedVideoTypes.includes(videoFile.type)) {
      setVideo(videoFile)
      console.log(videoFile)
      setStatus({ field: "videoSuccess", state: true, value: `Video Uploaded Suceesfully ${videoFile.name}` })

      setTimeout(() => {
        setStatus({ field: "videoSuccess", state: false, value: `Video Uploaded Suceesfully ${videoFile.name}` })
      }, 3000);
    } else {
      setStatus({ field: "videoFailure", state: false, value: 'Please select a valid video file (MP4, WebM, or Ogg)' })

      setTimeout(() => {
        setStatus({ field: "videoFailure", state: true, value: 'Please select a valid video file (MP4, WebM, or Ogg)' })
      }, 3000)
      event.target.value = null;
    }
  }

  const handleWebsiteUrl = (value) => {
    setWebsiteUrl(value);
  }

  const handleVideoUrl = (value) => {
    setVideoUrl(value)
  }

  const handleDeleteVideo = () => {
    setVideo(null)
  }

  const handleBusinessDesc = (e) => {
    setBusinessDesc(e.target.value)
  }

  const pdfData = [
    {
      name: "Certificate1",
      size: "100",
      date: "17/01/2024",
      time: "2:10PM",
    },
    {
      name: "Certification2",
      size: "100",
      date: "17/01/2024",
      time: "3:10PM",
    },
  ];

  // page handling
  const dispatch = useDispatch();
  const prevPage = (e) => {
    e.preventDefault();
    // navigate('/ownership/management')
  }

  const nextPage = (e) => {
    e.preventDefault();
    dispatch(changeFormToDisplayBusinessDesc({ formName: "Naics" }))
    // navigate('/ownership/naics')
  }

  const [facebookPic, setFacebookPic] = useState(BG);
  const [facebookRemoveBtn, setFacebookRemoveBtn] = useState(false);
  const [facebookUploadBtn, setFacebookUploadBtn] = useState(true);

  const [linkedinPic, setLinkedinPic] = useState(BG);
  const [linkedinRemoveBtn, setLinkedinRemoveBtn] = useState(false);
  const [linkedinUploadBtn, setLinkedinUploadBtn] = useState(true);

  const [instagramPic, setInstagramPic] = useState(BG);
  const [instagramRemoveBtn, setInstagramRemoveBtn] = useState(false);
  const [instagramUploadBtn, setInstagramUploadBtn] = useState(true);

  function handleFacebook(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setFacebookPic(objectUrl);
      setFacebookRemoveBtn(true);
      setFacebookUploadBtn(false);
    } else {
      setStatus({ field: "facebook", status: false, value: "Please select a valid image file." })
    }
  };

  const handleRemove = (e) => {
    setFacebookPic(BG);
    setFacebookRemoveBtn(false);
    setFacebookUploadBtn(true);
  };

  const handleChange = (e) => {
    setFacebookPic(URL.createObjectURL(e.target.files[0]));
  };
  // Linkedin
  function handleLinkedin(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const objectURL = URL.createObjectURL(selectedFile);
      setLinkedinPic(objectURL);
      setLinkedinRemoveBtn(true);
      setLinkedinUploadBtn(false);
    } else {
      setStatus({ field: "linkedin", status: false, value: "Please select a valid image file." })
    }
  }

  const handleRemoveLinkedin = (e) => {
    setLinkedinPic(BG);
    setLinkedinRemoveBtn(false);
    setLinkedinUploadBtn(true);
  };

  const handleChangeLinkedin = (e) => {
    setLinkedinPic(URL.createObjectURL(e.target.files[0]));
  }

  // instagram
  function handleInstagram(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const objectURL = URL.createObjectURL(selectedFile);
      setInstagramPic(objectURL);
      setInstagramRemoveBtn(true);
      setInstagramUploadBtn(false);
    } else {
      setStatus({ field: "instagram", status: false, value: "Please select a valid image file." })
    }
  }

  const handleRemoveInstagram = (e) => {
    setInstagramPic(BG);
    setInstagramRemoveBtn(false);
    setInstagramUploadBtn(true)
  }

  const handleChangeInstagram = (e) => {
    setInstagramPic(URL.createObjectURL(e.target.files[0]));
  }


  // Capability Statement
  const [fileInfos, setFileInfos] = useState([]);

  // const handleFileChangePdf = (e) => {
  //   const fileInput = e.target;
  //   const selectedFiles = fileInput.files;

  //   if (selectedFiles.length > 0) {
  //     const newFileInfos = Array.from(selectedFiles).map((file) => {

  //       if (fileInfos.some((existingFile) => existingFile.name === file.name)) {
  //         // Alert the user that the file is already present
  //         alert(`File ${file.name} is already present.`);
  //         return Promise.resolve(null); // Returning a resolved promise for the already present file
  //       }

  //       const fileReader = new FileReader();

  //       // Return a Promise to properly handle asynchronous file reading
  //       return new Promise((resolve) => {
  //         // Handle the onload event when the file is successfully read
  //         fileReader.onload = () => {
  //           const { name, lastModified, size } = file;

  //           // Convert size from bytes to kilobytes
  //           const sizeInKB = size / 1024;

  //           // Extract additional information as needed
  //           const lastModifiedDate = new Date(lastModified);
  //           // date formating
  //           const day = String(lastModifiedDate.getDate()).padStart(2, '0');
  //           const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0');
  //           const year = String(lastModifiedDate.getFullYear()).slice(-2);
  //           const time = lastModifiedDate.toLocaleTimeString();
  //           const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

  //           const formattedDate = `${day}/${month}/${year}`
  //           resolve({
  //             name,
  //             size: sizeInKB.toFixed(2), // Display size in KB with two decimal places
  //             lastModified: formattedLastModifiedDate,
  //             date: formattedDate,
  //             time,
  //             content: fileReader.result, // If you need the file content
  //           });
  //         };

  //         // Read the file as text or binary data, depending on your needs
  //         fileReader.readAsText(file);
  //         // fileReader.readAsBinaryString(file);
  //       });
  //     });

  //     // Use Promise.all to wait for all promises to resolve before updating state
  //     Promise.all(newFileInfos).then((resolvedFileInfos) => {
  //       // Update the state with the new file information
  //       setFileInfos((prevFileInfos) => [...prevFileInfos, ...resolvedFileInfos]);
  //     });
  //   }
  // };

  const MAX_FILE_SIZE_MB = 50;

  const handleFileChangePdf = async (e) => {
    const fileInput = e.target;
    const selectedFiles = fileInput.files;

    if (selectedFiles.length > 0) {
      const newFileInfos = [];

      for (const file of selectedFiles) {
        // Check if the file exceeds the maximum allowed size
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          // Alert the user about the size limit
          setStatus({ field: "CapabilityStatementMax", state: false, value: `File ${file.name} exceeds the maximum allowed size of ${MAX_FILE_SIZE_MB} MB.` })

          setTimeout(() => {
            setStatus({ field: "CapabilityStatementMax", state: true, value: `File ${file.name} exceeds the maximum allowed size of ${MAX_FILE_SIZE_MB} MB.` })
          }, 3000)
          continue; // Skip the current iteration
        }

        // Check if the file with the same name already exists
        if (fileInfos.some((existingFile) => existingFile.name === file.name)) {
          // Alert the user that the file is already present
          setStatus({ field: "CapabilityStatementTwice", state: false, value: `File ${file.name} is already present.` })

          setTimeout(() => {
            setStatus({ field: "CapabilityStatementTwice", state: true, value: `File ${file.name} is already present.` })
          }, 3000)
          setOpen(true);
          continue; // Skip the current iteration
        }

        // Check if the file has a valid extension (PDF or Word)
        const validExtensions = ['.pdf', '.doc', '.docx'];
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

        if (!validExtensions.includes(fileExtension)) {
          // Alert the user to upload a valid extension
          setStatus({ field: "CapabilityStatementDouble", state: false, value: `Invalid file type. Please upload a PDF or Word document.` })

          setTimeout(() => {
            setStatus({ field: "CapabilityStatementDouble", state: true, value: `Invalid file type. Please upload a PDF or Word document.` })
          }, 3000)
          continue; // Skip the current iteration
        }

        const fileReader = new FileReader();

        // Use try-catch to handle errors and ensure proper flow
        try {
          const fileInfo = await new Promise((resolve) => {
            // Handle the onload event when the file is successfully read
            fileReader.onload = () => {
              const { name, lastModified, size } = file;
              // ... (rest of the code remains the same)
              const sizeInKB = size / 1024;

              // Extract additional information as needed
              const lastModifiedDate = new Date(lastModified);
              // date formatting
              const day = String(lastModifiedDate.getDate()).padStart(2, '0');
              const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0');
              const year = String(lastModifiedDate.getFullYear()).slice(-2);
              const time = lastModifiedDate.toLocaleTimeString();
              const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

              const formattedDate = `${day}/${month}/${year}`;
              resolve({
                name,
                size: sizeInKB.toFixed(2),
                lastModified: formattedLastModifiedDate,
                date: formattedDate,
                time,
                content: fileReader.result,
              });
            };

            // Read the file as text or binary data, depending on your needs
            fileReader.readAsText(file);
            // fileReader.readAsBinaryString(file);
          });

          newFileInfos.push(fileInfo);
          setStatus({ field: 'CapabilityStatement', state: true, value: 'Successfully Uploaded' })

          setTimeout(() => {
            setStatus({ field: 'CapabilityStatement', state: false, value: 'Successfully Uploaded' })
          }, 2000)
        } catch (error) {
          console.error('Error reading file:', error);
        }
      }

      // Update the state with the new file information
      setFileInfos((prevFileInfos) => [...prevFileInfos, ...newFileInfos]);
    }
  };


  const handleRemoveFileCapanility = (fileName) => {
    // Remove the file from fileInfos based on the fileName
    const updatedFileInfos = fileInfos.filter((file) => file.name !== fileName);
    setFileInfos(updatedFileInfos);
  };

  // capability Statement


  // pop up alert
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleRmsdcValue = (event, values) => {
    setRmsdcValues(values)
  }

  const handleClose = () => {
    setOpen(false);
  };
  // pop up alert

  function showError() {
    document.getElementById('status').style.display = 'block';
    if (status.state === true && status.field === "CapabilityStatement") {
      setTimeout(() => {
        document.getElementById('status').style.display = 'none';
      }, 3000)
    }

  }
  const [pdfbusinessprof, setFileUpload] = useState(Object.keys(businessprofile).length >= 1 ? businessprofile : {})
  const handleNext = () => {
    dispatch(changeFormToDisplayBusinessDesc({ formName: "Naics", step: "next", fileUpload: pdfbusinessprof, page: "businessprofile" }))
  }

  const handleReturn = () => {
    dispatch(changeSideBar({ sideBarName: "Management Control" }))
  }

  return (
    <>
      {/* <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment> */}
      <div className="main bg-white flex flex-col">
        {/* <Stepper /> */}
        <div className='flex flex-col p-8 gap-6'>
          <div className="w-full h-[0px] border border-neutral-300"></div>
          <SectionTitle title='SET UP YOUR PROFILE' />
          <div className='flex flex-col gap-10'>
            <div className="w-full h-[134px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[134px] flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex">
                  <Label text='Business Description' required='*' />
                </div>
                <textarea name="business-desc" id="description" cols="30" className='h-[134px] shadow border border-[#E2E4E9] w-full outline-none p-2 resize-none' placeholder='Your descritpion should be concise, use key words for your industry and should be in complete sentences, toggles case' onChange={(e) => handleBusinessDesc(e)}></textarea>
              </div>
            </div>

            <div className='flex justify-between items-center gap-6'>
              <div className='flex flex-col gap-4 w-full'>
                <Label text="RMSDC Allignment" required="*" />
                {/* <InputField placeholder='RMSDC' disabled={true} /> */}
                <Autocomplete
                  multiple
                  id="rmsdc-naics"
                  options={rmsdcLookup}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  // getOptionDisabled={(option) =>
                  //     primaryNAICSValues.length >= maxSelectionPrimaryNaics && !primaryNAICSValues.includes(option)}
                  onChange={handleRmsdcValue}
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
                      placeholder={rmsdcValues.length > 0 ? '' : 'RMSDC'}
                    />
                  )}
                />
              </div>
              <div className='flex flex-col gap-4 justify-start w-full'>
              </div>
            </div>

            <div className='general-gap'>
              <Label text='Website URL' required='*' />
              <BusinessInputField id='website-url' placeholder='https://example.com' onChange={handleWebsiteUrl} type='text' />
            </div>


            <div className="flex flex-col gap-4">
              <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex">
                <Label text='Video File' required='*' />
              </div>
              {/* {video &&
                <div className="flex justify-start items-start gap-4">
                  <video key={video.name} width="400" controls>
                    <source src={URL.createObjectURL(video)} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  <button className="text-red-500" onClick={handleDeleteVideo}><RiDeleteBin6Line /></button>
                </div>
              } */}
              <div className="flex justify-between items-center">
                <div className="basis-1/5 flex gap-10 items-center">
                  <label className="cursor-pointer" htmlFor="video" onChange={handleFileChange} onClick={(event) => event.target.value = null}>
                    <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                      <div className="w-5 h-5 relative">
                        <img src={Upload} alt="" />
                      </div>
                      <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                        <input className="hidden" type="file" id="video" />
                        Upload
                      </div>
                    </div>
                  </label>
                  <div>(or)</div>
                </div>
                <div className="basis-4/5">
                  <BusinessInputField id='video-url' placeholder='https://example.com' type='text' onChange={handleVideoUrl} />
                </div>
              </div>
              {status.field === "videoSuccess" && status.state === true && <div className="text-green-500 text-sm">{status.value}</div>}
              {status.field === "videoFailure" && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
            </div>
            {console.log(video)}

            <div className="social-icons flex flex-col gap-8">
              <div className="social-icons general-gap">
                <Label text='Social Media Icons' required='*' />
                <div className='flex gap-4 justify-between items-center'>
                  <div className="icons general-gap">
                    <div className='flex flex-col justify-start gap-2'>
                      <SectionTitle title='Facebook' />
                    </div>
                    <div className='flex justify-between items-start gap-6'>
                      <div >
                        <img className='rounded-full h-16 w-16' src={facebookPic} alt="" />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                          <div className="text-gray-950 text-base font-semibold leading-normal">Upload Image </div>
                          <div className="text-gray-600 text-sm font-normal leading-tight">Min 400x400px, PNG or JPEG</div>
                        </div>
                        <div className='flex gap-2'>
                          {facebookUploadBtn &&
                            <label htmlFor='facebook' className='cursor-pointer'>
                              <div className="w-[68px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type="file" id='facebook' className='hidden' accept="image/*" onChange={(e) => handleFacebook(e)} onClick={(e) => e.target.value = null} /> Upload</div>
                                </div>
                              </div>
                            </label>
                          }
                          {facebookRemoveBtn &&
                            <div className='flex gap-2'>
                              <div className="w-[74px] h-8 p-1.5 bg-white rounded-lg shadow border border-rose-600 justify-center items-center gap-0.5 inline-flex" role='button' onClick={(e) => handleRemove(e)}>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-rose-600 text-sm font-medium leading-tight">Remove</div>
                                </div>
                              </div>
                              <label htmlFor='facebookChange' className='cursor-pointer'>
                                <div className="w-[115px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                  <div className="px-1 justify-center items-center gap-2 flex">
                                    <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type='file' id='facebookChange' accept="image/*" className='hidden' onChange={(e) => handleChange(e)} onClick={(e) => e.target.value = null} />Change Photo</div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="icons general-gap">
                    <div className='flex flex-col justify-start gap-2'>
                      <SectionTitle title='LinkedIn' />
                    </div>
                    <div className='flex justify-between items-start gap-6'>
                      <div >
                        <img className='rounded-full h-16 w-16' src={linkedinPic} alt="" />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                          <div className="text-gray-950 text-base font-semibold leading-normal">Upload Image </div>
                          <div className="text-gray-600 text-sm font-normal leading-tight">Min 400x400px, PNG or JPEG</div>
                        </div>
                        <div className='flex gap-2'>
                          {linkedinUploadBtn &&
                            <label htmlFor='linkedin' className='cursor-pointer'>
                              <div className="w-[68px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type="file" id='linkedin' className='hidden' accept="image/*" onChange={(e) => handleLinkedin(e)} onClick={(e) => e.target.value = null} /> Upload</div>
                                </div>
                              </div>
                            </label>
                          }
                          {linkedinRemoveBtn &&
                            <div className='flex gap-2'>
                              <div className="w-[74px] h-8 p-1.5 bg-white rounded-lg shadow border border-rose-600 justify-center items-center gap-0.5 inline-flex" role='button' onClick={(e) => handleRemoveLinkedin(e)}>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-rose-600 text-sm font-medium leading-tight">Remove</div>
                                </div>
                              </div>
                              <label htmlFor='linkedinChange' className='cursor-pointer'>
                                <div className="w-[115px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                  <div className="px-1 justify-center items-center gap-2 flex">
                                    <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type='file' id='linkedinChange' className='hidden' accept="image/*" onChange={(e) => handleChangeLinkedin(e)} onClick={(e) => e.target.value = null} />Change Photo</div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="icons general-gap">
                    <div className='flex flex-col justify-start gap-2'>
                      <SectionTitle title='Instagram' />
                    </div>
                    <div className='flex justify-between items-start gap-6'>
                      <div >
                        <img className='rounded-full h-16 w-16' src={instagramPic} alt="" />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                          <div className="text-gray-950 text-base font-semibold leading-normal">Upload Image </div>
                          <div className="text-gray-600 text-sm font-normal leading-tight">Min 400x400px, PNG or JPEG</div>
                        </div>
                        <div className='flex gap-2'>
                          {instagramUploadBtn &&
                            <label htmlFor='instagram' className='cursor-pointer'>
                              <div className="w-[68px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type="file" id='instagram' className='hidden' onChange={(e) => handleInstagram(e)} onClick={(e) => e.target.value = null} /> Upload</div>
                                </div>
                              </div>
                            </label>
                          }
                          {instagramRemoveBtn &&
                            <div className='flex gap-2'>
                              <div className="w-[74px] h-8 p-1.5 bg-white rounded-lg shadow border border-rose-600 justify-center items-center gap-0.5 inline-flex" role='button' onClick={(e) => handleRemoveInstagram(e)}>
                                <div className="px-1 justify-center items-center gap-2 flex">
                                  <div className="text-center text-rose-600 text-sm font-medium leading-tight">Remove</div>
                                </div>
                              </div>
                              <label htmlFor='linkedinChange' className='cursor-pointer'>
                                <div className="w-[115px] h-8 p-1.5 bg-white rounded-lg shadow border border-zinc-200 justify-center items-center gap-0.5 inline-flex" role='button'>
                                  <div className="px-1 justify-center items-center gap-2 flex">
                                    <div className="text-center text-gray-600 text-sm font-medium leading-tight"><input type='file' id='linkedinChange' className='hidden' onChange={(e) => handleChangeInstagram(e)} onClick={(e) => e.target.value = null} />Change Photo</div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {status.field === 'instagram' && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
              {status.field === 'linkedin' && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
              {status.field === 'facebook' && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}

              {/* <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <Label text='Capability Statement' />
                  <label className='cursor-pointer' htmlFor='capability-statement'>
                    <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                      <div className="w-5 h-5 relative" >
                        <img src={Upload} alt="" />
                      </div>
                      <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='capability-statement' onChange={handleFileChangePdf} onClick={(e) => e.target.value = null} />Upload</div>
                    </div>
                  </label>
                </div>
                <div className='flex gap-5'>
                  {fileInfos.length > 0 && (
                    <div className="flex gap-4">
                      {fileInfos.map((fileInfo, index) => (
                        <div key={index}>
                          <PdfComp name={fileInfo.name} size={fileInfo.size} date={fileInfo.date} time={fileInfo.time} onRemove={handleRemoveFileCapanility} />
                          {console.log(fileInfo.lastModified)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {status.field === "CapabilityStatementMax" && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
                {status.field === "CapabilityStatementTwice" && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
                {status.field === "CapabilityStatementDouble" && status.state === false && <div className="text-red-500 text-sm">{status.value}</div>}
                {status.field === "CapabilityStatement" && status.state === true && <div id="status" className="text-green-500 text-sm">{status.value}</div>}
                <div id="status" className="text-green-500" style={display = "none"}>upload successfully</div>
              </div> */}

              <FileUpload label={`Capability Statement`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`CapabilityStatement`} fileInfos={pdfbusinessprof} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
            </div>
          </div>
        </div>
        <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeSideBar({ sideBarName: "Management Control" })} prevText="Previous: Management & Controls" actionNext={changeFormToDisplayBusinessDesc({ formName: "Naics" })} />
      </div>
    </>
  )
}
