import React, { useState } from 'react';

import Upload from '../assests/images/cloud.png'
import Label from './Label';
import PdfComp from "./PdfComp";


const FileUpload = ({ label, requiredText, toolTip, maxSizeMB, onFilesChange, fileInfos, setFileInfos, fileName, validExtensions }) => {
    // validExtensions, identifier
    const handleFileChange = async (e) => {
        const fileInput = e.target;
        const selectedFiles = fileInput.files;

        if (selectedFiles.length > 0) {
            const newFileInfos = [];

            for (const file of selectedFiles) {
                if (file.size > maxSizeMB * 1024 * 1024) {
                    alert(`File ${file.name} exceeds the maximum allowed size of ${maxSizeMB} MB.`);
                    continue;
                }

                if (fileInfos[fileName] && fileInfos[fileName].some((existingFile) => existingFile.name === file.name)) {
                    alert(`File ${file.name} is already present.`);
                    continue;
                }

                const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

                if (!validExtensions.includes(fileExtension)) {
                    alert(`Invalid file type. Please upload a ${validExtensions.join(' or ')} document.`);
                    continue;
                }

                const fileReader = new FileReader();

                try {
                    const fileInfo = await new Promise((resolve) => {
                        fileReader.onload = () => {
                            const { name, lastModified, size } = file;
                            const sizeInKB = size / 1024;

                            const lastModifiedDate = new Date(lastModified);
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

                        fileReader.readAsText(file);
                    });

                    newFileInfos.push(fileInfo);
                } catch (error) {
                    console.error('Error reading file:', error);
                }
            }

            let newFile;

            if (fileInfos[fileName]) {
                newFile = {
                    ...fileInfos,
                    [fileName]: [...fileInfos[fileName], ...newFileInfos],
                }
            } else {
                newFile = {
                    ...fileInfos,
                    [fileName]: newFileInfos,
                }
            }

            console.log(fileInfos, newFile, fileName)

            // setFileInfos((prevFileInfos) => [...prevFileInfos, ...newFileInfos]);
            setFileInfos(newFile);
            // onFilesChange(newFileInfos, identifier);
            onFilesChange(newFileInfos);
        }
    };

    const onRemove = (e) => {
        console.log(e, fileInfos[fileName], fileInfos[fileName].map(event => event.name).indexOf(e))
        if (fileInfos[fileName].map(event => event.name).indexOf(e) !== -1) {
            const mewArr = fileInfos[fileName].filter((elem, i) => i !== fileInfos[fileName].map(event => event.name).indexOf(e))
            console.log(mewArr);
            const newFile1 = {
                ...fileInfos,
                [fileName]: mewArr
            }
            setFileInfos(newFile1);
        }
    }

    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className="flex justify-between">
                <Label text={label} required={requiredText} toolTipText={toolTip} />
                <label className="cursor-pointer">
                    <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                            <img src={Upload} alt="" />
                        </div>
                        {/* remove the id */}
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                            <input className="hidden" type="file" onChange={(e) => handleFileChange(e)} onClick={(e) => e.target.value = null} />
                            Upload
                        </div>
                    </div>
                </label>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    {/* {fileInfos.length > 0 && (
                        <div className="flex gap-4">
                            {fileInfos.map((fileInfo, index) => {
                                return <div key={index}>
                                    <PdfComp name={fileInfo.name} size={fileInfo.size} date={fileInfo.date} time={fileInfo.time} />
                                </div>
                            }
                            )}
                        </div>
                    )} */}
                    {fileInfos[fileName] && (
                        <div className="flex gap-4">
                            {fileInfos[fileName].map((fileInfo, index) => {
                                return <div key={index}>
                                    <PdfComp name={fileInfo.name} size={fileInfo.size} date={fileInfo.date} time={fileInfo.time} onRemove={onRemove} />
                                </div>
                            }
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
