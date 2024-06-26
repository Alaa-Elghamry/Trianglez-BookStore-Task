// src/components/BookDetails.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Paper, Typography, Button, Grid } from "@mui/material";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import { deleteBook } from "../store/slices/booksSlice";

function BookDetails() {
  const { bookId } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id.toString() === bookId);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteConfirm = () => {
    dispatch(deleteBook(book.id));
    setOpenModal(false);
  };

  if (!book) {
    return <Typography variant="h5">Book not found</Typography>;
  }

  return (
    <>
      <Box sx={{ padding: "40px" }}>
        <Paper sx={{ padding: "20px", borderRadius: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src={book.coverPhoto}
                alt={book.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">{book.title}</Typography>
              <Typography variant="subtitle1">
                By {book.author} | {book.date}
              </Typography>
              <Typography variant="h6">${book.price}</Typography>
              <Typography variant="body1">ISBN: {book.isbn}</Typography>
              <Typography variant="body1">Version: {book.version}</Typography>
              <Typography variant="body1">Category: {book.category}</Typography>
              <Typography variant="body1">Pages: {book.pages}</Typography>
              <Typography variant="body1">
                Time to read: {book.readTime}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "20px" }}>
                {book.brief}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button
                  onClick={() => setOpenModal(true)}
                  variant="contained"
                  sx={{
                    backgroundColor: "darkRed",
                    color: "white",
                    "&:hover": { backgroundColor: "Red" },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <ConfirmationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}

export default BookDetails;
