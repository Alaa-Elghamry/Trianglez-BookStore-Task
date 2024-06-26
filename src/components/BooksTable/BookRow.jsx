// BookRow.jsx
import React, { useState } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBook } from "../../store/slices/booksSlice";
import ConfirmationModal from "../Modals/ConfirmationModal";

function BookRow({ book }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteConfirm = () => {
    dispatch(deleteBook(book.id));
    setOpenModal(false);
  };

  const handleViewDetails = () => {
    navigate(`/book-details/${book.id}`);
  };
  const handleEditBook = () => {
    navigate(`/edit-book/${book.id}`);
  };
  return (
    <>
      <TableRow>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.category}</TableCell>
        <TableCell>{book.author}</TableCell>
        <TableCell>{book.isbn}</TableCell>
        <TableCell>{book.version}</TableCell>
        <TableCell>
          <IconButton onClick={handleViewDetails}>
            <Visibility sx={{ color: "blue" }} />
          </IconButton>
          <IconButton onClick={handleEditBook}>
            <Edit sx={{ color: "green" }} />
          </IconButton>
          <IconButton onClick={() => setOpenModal(true)}>
            <Delete sx={{ color: "darkRed" }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <ConfirmationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}

export default BookRow;
