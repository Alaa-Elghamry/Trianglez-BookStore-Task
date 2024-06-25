// BooksTable.jsx
import React from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
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
