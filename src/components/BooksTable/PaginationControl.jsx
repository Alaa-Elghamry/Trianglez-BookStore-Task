// PaginationControl.jsx
import React from "react";
import { Pagination } from "@mui/material";

function PaginationControl({ count, page, onPageChange }) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      style={{ marginTop: "20px" }}
    />
  );
}

export default PaginationControl;
