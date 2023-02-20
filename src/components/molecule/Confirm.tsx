/** @jsxImportSource @emotion/react */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { fontTypes } from "../../utils/style/fonts";

type ConfirmProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOK: () => void;
  title: string;
  disc: string;
};
export const Confirm = ({ open, setOpen, onOK, title, disc }: ConfirmProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" css={fontTypes.subtitle}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" css={fontTypes.disc}>
          {disc}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>CANCEL</Button>
        <Button
          onClick={() => {
            setOpen(false);
            onOK();
          }}
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
