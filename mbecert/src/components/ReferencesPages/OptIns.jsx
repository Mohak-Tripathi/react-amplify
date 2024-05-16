import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";

import { changeReferencesPage } from "../../features/displayPage/displayPageSlice";
import FormFooter from "../../globalComponents/FormFooter";
import CheckBoxDynamic from "./CheckBoxDynamic";

export default function OptIns() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [firstCheckbox, setFirstCheckbox] = useState(true);
  const [secondCheckbox, setsecondCheckbox] = useState(false);
  const [thirdCheckbox, setthirdCheckbox] = useState(false);
  const [fourthCheckbox, setfourthCheckbox] = useState(false);

  const handleFirstCheckboxChange = (newState) => {
    setFirstCheckbox(newState);
    // console.log(`First Checkbox state: ${newState}`);
  };

  const handleSecondCheckboxChange = (newState) => {
    setsecondCheckbox(newState);
    // console.log(`Second Checkbox state: ${newState}`);
  };

  const handleThirdCheckboxChange = (newState) => {
    setthirdCheckbox(newState);
    // console.log(`Third Checkbox state: ${newState}`);
  };

  const handleFourthCheckboxChange = (newState) => {
    setfourthCheckbox(newState);
    // console.log(`Fourth Checkbox state: ${newState}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [action, setAction] = useState("");

  const handleClose = (action) => {
    setAction(action);
    // console.log(`Action: ${action}`);
    setOpen(false);
  };

  const handleNext = () => {
    dispatch(
      changeReferencesPage({ formName: "References Info 1", step: "next" })
    );
  };

  const handleReturn = () => {
    dispatch(changeReferencesPage({ formName: "Bank Ref Info", step: "prev" }));
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              minWidth: "600px",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #000000",
              borderRadius: "0",
              boxShadow: "none",
            },
          }}
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p className=" [font-family:'Degular_Demo-Regular',Helvetica] font-normal text-[#141f58] text-[20px] text-center tracking-[-0.12px] leading-[20px]">
                Are you sure that you want to delete this application. <br />
                All data and documents will be lost.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose("delete")}>
              <div className="flex h-[43px] items-center justify-center gap-[16px] py-4 px-4 relative bg-white border-[0.4px] border-solid border-[#ff3e3e]">
                <div className="flex items-center justify-center">
                  <div className="[font-family:'Degular_Demo-Regular',Helvetica] font-normal text-[#fd222270] text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                    Yes - Delete
                  </div>
                </div>
              </div>
            </Button>
            <Button onClick={() => handleClose("save")}>
              <div className="flex items-center justify-center gap-2 bg-[#0045AC] hover:bg-main-blue-hover py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="text-white z-10">No - Save information</div>
                </div>
              </div>
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      <div className="flex flex-col p-8 gap-6 h-full" style={{ paddingTop: 0 }}>
        <div className="w-full h-[0px] border border-neutral-300"></div>
        <div className="text-left text-zinc-500 text-base font-normal font-['Degular Demo'] uppercase leading-tight">
          Opt-Ins
        </div>
        <CheckBoxDynamic
          labelText="MBE2MBE Search."
          toolTipText="If you opt-out, your firm cannot be searched and will not be searchable by others."
          checked={firstCheckbox}
          id="firstcheckbox"
          htmlfor="firstcheckbox"
          onChange={handleFirstCheckboxChange}
        />
        <CheckBoxDynamic
          labelText="Text communication regarding certification processing and renewal."
          id="secondcheckbox"
          htmlfor="secondcheckbox"
          checked={secondCheckbox}
          onChange={handleSecondCheckboxChange}
        />
        <CheckBoxDynamic
          labelText="Opt in for Marketing and Events."
          id="thirdcheckbox"
          htmlfor="thirdcheckbox"
          checked={thirdCheckbox}
          onChange={handleThirdCheckboxChange}
        />
        <CheckBoxDynamic
          labelText="Opt in Business Development."
          id="fourthcheckbox"
          htmlfor="fourthcheckbox"
          checked={fourthCheckbox}
          onChange={handleFourthCheckboxChange}
        />
      </div>
      <FormFooter
        onNextClick={handleNext}
        onReturnClick={handleReturn}
        actionReturn={changeReferencesPage({
          formName: "Bank Ref Info",
          step: "prev",
        })}
        actionNext={changeReferencesPage({
          formName: "References Info 1",
          step: "next",
        })}
        withdraw={handleClickOpen}
      />
    </>
  );
}
