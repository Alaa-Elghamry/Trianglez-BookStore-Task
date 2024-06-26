import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const categories = ["Fiction", "Non-Fiction", "Science", "History"];
const previousVersions = ["1.0", "1.1", "2.0"];
function BookInfoFields({ formik }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <TextField
        name="title"
        label="Book Title*"
        variant="outlined"
        value={formik.values.title}
        onChange={handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        fullWidth
        margin="normal"
      />
      <TextField
        name="author"
        label="Book Author8"
        variant="outlined"
        value={formik.values.author}
        onChange={handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
        fullWidth
        margin="normal"
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Book Category</InputLabel>
        <Select
          name="category"
          value={formik.values.category}
          onChange={handleChange}
          label="Book Category*"
          error={formik.touched.category && Boolean(formik.errors.category)}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.category && (
          <Typography color="error" variant="body2" component="div">
            {formik.errors.category}
          </Typography>
        )}
      </FormControl>
      <TextField
        name="price"
        label="Book Price*"
        variant="outlined"
        value={formik.values.price}
        onChange={handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        fullWidth
        margin="normal"
        type="number"
        inputProps={{ step: "0.01" }}
      />
      <TextField
        name="version"
        label="Book Version*"
        variant="outlined"
        value={formik.values.version}
        onChange={handleChange}
        error={formik.touched.version && Boolean(formik.errors.version)}
        helperText={formik.touched.version && formik.errors.version}
        fullWidth
        margin="normal"
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Book Older Version</InputLabel>
        <Select
          name="olderVersion"
          value={formik.values.olderVersion}
          onChange={handleChange}
          label="Book Older Version*"
        >
          {previousVersions.map((version) => (
            <MenuItem key={version} value={version}>
              {version}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="edition"
        label="Book Edition"
        variant="outlined"
        value={formik.values.edition}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="isbn"
        label="Book ISBN*"
        variant="outlined"
        value={formik.values.isbn}
        onChange={handleChange}
        error={formik.touched.isbn && Boolean(formik.errors.isbn)}
        helperText={formik.touched.isbn && formik.errors.isbn}
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 13 }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}

export default BookInfoFields;
