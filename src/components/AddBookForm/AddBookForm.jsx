import { Box, Paper } from "@mui/material";
import React from "react";
import BookInfoFields from "./BookInfoFields";
import BookMedia from "./BookMedia";
import useBookForm from "../../hooks/useBookForm";

function AddBookForm() {
  const formik = useBookForm();
  return (
    <Paper style={{ padding: "20px", borderRadius: "20px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            width: "100%",
          }}
        >
          <BookInfoFields formik={formik} />
          <BookMedia formik={formik} />
        </Box>
      </form>
    </Paper>
  );
}

export default AddBookForm;
