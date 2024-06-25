import { Box, Typography } from "@mui/material";
import React from "react";
import BooksList from "../components/BooksTable/BooksList";

export default function Home() {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mb: 2, fontWeight: "700" }}
      >
        Books
      </Typography>
      <BooksList />
    </Box>
  );
}
