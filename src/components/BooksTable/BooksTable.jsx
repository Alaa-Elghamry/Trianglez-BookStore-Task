// BooksTable.jsx
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import BookRow from "./BookRow";

function BooksTable({ books }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ fontWeight: "600" }}>
            <TableCell>Book Title</TableCell>
            <TableCell>Book Category</TableCell>
            <TableCell>Book Author</TableCell>
            <TableCell>Book ISBN</TableCell>
            <TableCell>Book Version</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <BookRow key={book.id} book={book} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BooksTable;
