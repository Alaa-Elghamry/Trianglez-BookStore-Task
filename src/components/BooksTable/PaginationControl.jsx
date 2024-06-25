// PaginationControl.jsx
import React from "react";
import { Pagination } from "@mui/material";

function PaginationControl({ count, page, onPageChange }) {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={() => onPageChange(page)}
      style={{ marginTop: "20px" }}
    />
  );
}

export default PaginationControl;
