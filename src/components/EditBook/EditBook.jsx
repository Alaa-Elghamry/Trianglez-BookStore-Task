// src/components/EditBook.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, TextField, Button, Grid } from "@mui/material";
import { updateBook } from "../../store/slices/booksSlice";

function EditBook() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id.toString() === bookId);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    price: "",
    isbn: "",
    version: "",
    category: "",
    pages: "",
    readTime: "",
    brief: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        date: book.date,
        price: book.price,
        isbn: book.isbn,
        version: book.version,
        category: book.category,
        pages: book.pages,
        readTime: book.readTime,
        brief: book.brief,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ ...book, ...formData }));
    navigate(`/`);
  };

  const handleCancel = () => {
    navigate(`/`);
  };

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <Box sx={{ padding: "40px" }}>
      <Paper sx={{ padding: "20px", borderRadius: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Categories"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Version"
                name="version"
                value={formData.version}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Older Version"
                name="olderVersion"
                value={formData.olderVersion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Edition"
                name="edition"
                value={formData.edition}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book ISBN"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Release Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Book Brief"
                name="brief"
                value={formData.brief}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                sx={{ marginLeft: "20px" }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default EditBook;
