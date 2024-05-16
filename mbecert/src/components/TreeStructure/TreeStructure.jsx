import React, { useEffect, useState } from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import IndividualForm from './IndividualForm';
import CompanyForm from './CompanyForm';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";

import TreeStructureOrg from './TreeStructureOrg';
import TreeStructureIndividual from './TreeStructureIndividual';
// import styles from './General.css';
import FormFooter from '../../globalComponents/FormFooter';
import { changeBusinessPage } from '../../features/displayPage/displayPageSlice';
import TreeStructureTrust from './TreeStructureTrust';
import TreeStructureInvFund from './TreeStructureInvFund';
import { updateCompany_l2, updateCompany_l3 } from '../../features/treeStructure/treeStructureSlice';
import TrustForm from './TrustForm';
import InvestFundForm from './InvestFundForm';

export default function TreeStructure() {
    const dispatch = useDispatch()
    const { companySelected, tree, companySelectedArr, companySelectedArr_l2, companySelectedArr_l3 } = useSelector((store) => store.treeStructure);

    // console.log(companySelected, tree);

    const [dialogContent, setDialogContent] = useState(null);
    const [indiForm, setInviForm] = useState([]);
    const [showIndividualForm, setShowIndividualForm] = useState(false);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [companyFormData, setCompanyFormData] = useState([]);

    // Pop Up handling
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const [updatedJsonData, setUpdatedJsonData] = useState({
        "AB Company": []
    });

    const [updatedL3JsonData, setUpdatedL3JsonData] = useState({
        "A Company": []
    });

    const [jsonData, setJsonData] = useState(tree);

    useEffect(() => {
        // console.log(tree.hasOwnProperty('l1'), tree)
        setJsonData(tree);
    }, [tree])

    const [abCompanyCreated, setABCompanyCreated] = useState(false);

    const generateTreeNodes = (data, companyName, level, currentLevel) => {
        if (!data || data.length === 0) {
            return null;
        }

        // console.log(data, companyName, level);

        return data.map((item, index) => {
            // console.log(item, companyName);
            return <TreeNode
                key={index}
                label={
                    <StyledNode>
                        {item.name === 'Individual' && <button onClick={() => handleButtonClick(item.name, companyName, level, currentLevel)}><TreeStructureIndividual individualName={item.name} isEdit={true} /></button>}
                        {item.name === 'Company' && <button onClick={() => handleButtonClick(item.name, companyName, level, currentLevel)}><TreeStructureOrg individualName={item.value ? item.value : item.name} isEdit={true} /></button>}
                        {item.name === 'Trust' && <button onClick={() => handleButtonClick(item.name, companyName, level, currentLevel)}><TreeStructureTrust individualName={item.name} isEdit={true} /></button>}
                        {item.name === 'Investment Fund' && <button onClick={() => handleButtonClick(item.name, companyName, level, currentLevel)}><TreeStructureInvFund individualName={item.name} isEdit={true} /></button>}
                        {/* <button onClick={() => handleButtonClick(item.name)}>{item.name}</button> */}
                    </StyledNode>
                }
            >
                {item.children && generateTreeNodes(item.children)}
            </TreeNode>
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        dispatch(changeBusinessPage({ formName: "Other Ownership Considerations", step: "next" }));
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "Business Structure", step: "prev" }));
    }

    const handleButtonClick = (buttonName, companyName, level, currentLevel) => {
        if (buttonName === 'Individual') {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<IndividualForm setInviForm={setInviForm} handleClose={handleClose} companyName={companyName} level={level} currentLevel={currentLevel} setOpen={setOpen} />);
            setOpen(true);
        }
        if (buttonName === 'Company') {
            setShowIndividualForm(false);
            setShowCompanyForm(true);
            setDialogContent(<CompanyForm onFormSubmit={handleCompanyFormSubmit} level={level} companyName={companyName} handleClose={handleClose} currentLevel={currentLevel} setOpen={setOpen} />);
            setOpen(true);
        }
        if (buttonName === 'Trust') {
            setShowIndividualForm(false);
            setShowCompanyForm(true);
            setDialogContent(<TrustForm onFormSubmit={handleCompanyFormSubmit} level={level} handleClose={handleClose} currentLevel={currentLevel} setOpen={setOpen} />);
            setOpen(true);
        }
        if (buttonName === 'Investment Fund') {
            setShowIndividualForm(false);
            setShowCompanyForm(true);
            setDialogContent(<InvestFundForm onFormSubmit={handleCompanyFormSubmit} level={level} handleClose={handleClose} currentLevel={currentLevel} setOpen={setOpen} />);
            setOpen(true);
        }
    };

    const handleCompanyFormSubmit = (formData) => {
        // Extract relevant data from formData
        const { textFiled, selectedCities } = formData;

        // Create a new company node
        const newCompanyNode = {
            "name": textFiled,
            "children": selectedCities.map(city => ({ "name": city.name }))
        };

        if (!abCompanyCreated) {
            // If "AB Company" hasn't been created, create it
            setUpdatedJsonData({
                "AB Company": [newCompanyNode]
            });

            // Set the flag to indicate that "AB Company" has been created
            setABCompanyCreated(true);
        } else {
            // If "AB Company" has been created, add to "A Company"
            setUpdatedL3JsonData((prevData) => ({
                "A Company": [...prevData["A Company"], newCompanyNode]
            }));
        }

        // Update the companyFormData state
        setCompanyFormData((prevData) => [...prevData, formData]);
        setShowCompanyForm(false);
    };


    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className='flex flex-col justify-between h-screen w-full'>
            <div className='w-full h-full overflow-scroll p-8 flex-col justify-start items-center gap-8 inline-flex bg-white treeParent'>
                {
                    tree.hasOwnProperty('l1') && Object.keys(jsonData["l1"]).map((treeComp, i) => {
                        // console.log("OBJECT KEYS", jsonData["l1"][treeComp], treeComp); // pass company here, not level
                        return <Tree
                            key={i}
                            className='tree'
                            lineWidth={'2px'}
                            lineColor={'blue'}
                            lineBorderRadius={'0px'}
                            label={<StyledNode>
                                <TreeStructureOrg organizationName={treeComp} isEdit={false} />
                                {/* <TreeStructureIndividual  isEdit={false}/> */}
                            </StyledNode>}
                        >
                            {generateTreeNodes(jsonData["l1"][treeComp], treeComp, "l2", "l1")}
                        </Tree>
                    })
                }
                <div className='flex justify-between items-center w-full'>
                    {
                        tree.hasOwnProperty('l2') && Object.keys(jsonData["l2"]).map((treeComp, i) => {
                            console.log("OBJECT KEYS", jsonData["l2"][treeComp], treeComp); // pass company here, not level
                            return <Tree
                                key={i}
                                className='tree'
                                lineWidth={'2px'}
                                lineColor={'green'}
                                lineBorderRadius={'0px'}
                                label={<StyledNode>
                                    <TreeStructureOrg organizationName={treeComp} isEdit={false} />
                                    {/* <TreeStructureIndividual  isEdit={false}/> */}
                                </StyledNode>}
                            >
                                {generateTreeNodes(jsonData["l2"][treeComp], treeComp, "l3", "l2")}
                            </Tree>
                        })
                    }
                </div>
                <div className='flex justify-between items-center w-full'>
                    {
                        tree.hasOwnProperty('l3') && Object.keys(jsonData["l3"]).map((treeComp, i) => {
                            console.log("OBJECT KEYS", jsonData["l3"][treeComp], treeComp); // pass company here, not level
                            return <Tree
                                key={i}
                                className='tree'
                                lineWidth={'2px'}
                                lineColor={'red'}
                                lineBorderRadius={'0px'}
                                label={<StyledNode>
                                    <TreeStructureOrg organizationName={treeComp} isEdit={false} />
                                    {/* <TreeStructureIndividual  isEdit={false}/> */}
                                </StyledNode>}
                            >
                                {generateTreeNodes(jsonData["l3"][treeComp], treeComp, "l4", "l3")}
                            </Tree>
                        })
                    }
                </div>
                {/* <Tree
                    className='tree'
                    lineWidth={'2px'}
                    lineColor={'#A5A5A5'}
                    lineBorderRadius={'0px'}
                    label={<StyledNode>
                        <TreeStructureOrg organizationName='ACME' isEdit={false} />
                    </StyledNode>}
                >
                    {generateTreeNodes(jsonData["ABC Company"])}
                </Tree> */}
                {/* <TreeStructureIndividual  isEdit={false}/> */}

                {/* showIndividualForm &&  */}
                <React.Fragment>
                    <Dialog
                        PaperProps={{
                            style: {
                                minWidth: "1200px",
                                maxWidth: "1200px",
                                border: "1px solid #000000",
                                borderRadius: "0",
                                boxShadow: "none",
                                zIndex: 10,
                                fontFamily: "degular"
                            },
                        }}
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        {/* <DialogTitle id="responsive-dialog-title" style={{ zIndex: 100 }}>
                        </DialogTitle> */}
                        {/* <DialogContent style={{ zIndex: 100 }}>
                            <DialogContentText style={{ zIndex: 100 }}>
                            </DialogContentText>
                        </DialogContent> */}
                        {dialogContent}
                        {/* <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Disagree
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions> */}
                    </Dialog>
                </React.Fragment>
                {/* {showCompanyForm && <CompanyForm onFormSubmit={handleCompanyFormSubmit} />} */}

                {/* {companyFormData.length > 0 && (
                    <>
                        <Tree
                            lineWidth={'2px'}
                            lineColor={'blue'}
                            lineBorderRadius={'10px'}
                            label={<StyledNode>Company Data (AB Company)</StyledNode>}
                        >
                            {generateTreeNodes(updatedJsonData["AB Company"])}
                        </Tree>

                        {abCompanyCreated && (
                            <Tree
                                lineWidth={'2px'}
                                lineColor={'red'}
                                lineBorderRadius={'10px'}
                                label={<StyledNode>Company Data (A Company)</StyledNode>}
                            >
                                {generateTreeNodes(updatedL3JsonData["A Company"])}
                            </Tree>
                        )}
                    </>
                )} */}
            </div>
            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "Business Structure", step: "prev" })} actionNext={changeBusinessPage({ formName: "Ownership Details", step: "next" })} />
        </div>
    )
}

const StyledNode = styled.div`
  padding: 5px;
`;
