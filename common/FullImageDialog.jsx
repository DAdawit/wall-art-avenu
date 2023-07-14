"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AllOutIcon from "@mui/icons-material/AllOut";
import {
  Nunito,
  Rokkitt,
  Open_Sans,
  Poppins,
  Freehand,
  Sirin_Stencil,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
export default function FullImageDialog({ image, confirm, text }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    confirm();
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handleClickOpen}
        className="flex items-center gap-2 bg-black text-white px-3 py-2 opacity-75 rounded-lg capitalize tracking-wide"
      >
        <span className={poppins.className}>full Image</span>
        <AllOutIcon />
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img
              src={image}
              alt="image"
              className="h-screen w-full object-contain block"
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
