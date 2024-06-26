import { Box, Typography } from "@mui/material";
import React from "react";
import AddBookForm from "../components/AddBookForm/AddBookForm";

export default function AddBookPage() {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mb: 2, fontWeight: "700" }}
      >
        Add Book
      </Typography>
      <AddBookForm />
    </Box>
  );
}
