// BookRow.jsx
import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { handleView, handleEdit, handleDelete } from "./bookActions";

function BookRow({ book }) {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.category}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>{book.version}</TableCell>
      <TableCell>
        <IconButton onClick={() => handleView(book.id)}>
          <Visibility sx={{ color: "blue" }} />
        </IconButton>
        <IconButton onClick={() => handleEdit(book.id)}>
          <Edit sx={{ color: "green" }} />
        </IconButton>
        <IconButton onClick={() => handleDelete(book.id)}>
          <Delete sx={{ color: "darkRed" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default BookRow;
