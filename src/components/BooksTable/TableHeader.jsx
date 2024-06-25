import React from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function TableHeader({ value, onChange, onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        size="small"
        placeholder="Search"
        sx={{ backgroundColor: "white" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={onChange}
      />
      <Button
        color="primary"
        variant="contained"
        sx={{
          borderRadius: "10px",
          fontSize: "14px",
          alignContent: "center",
        }}
        onClick={onClick}
      >
        <AddIcon sx={{ mr: "5px" }} /> Add Book
      </Button>
    </Box>
  );
}
