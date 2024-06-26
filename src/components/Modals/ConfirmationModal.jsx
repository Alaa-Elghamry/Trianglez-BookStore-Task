// ConfirmationModal.jsx
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

function ConfirmationModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Book</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this book?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          sx={{ backgroundColor: "darkRed", color: "white" }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
