import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function BookMedia({ formik }) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const handleFileChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const handleCancel = () => {
    formik.resetForm();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          component="label"
          fullWidth
          style={{
            margin: "10px 0",
            color: "darkRed",
            borderRadius: "10px",
            borderColor: "darkRed",
            padding: "5px",
          }}
        >
          Upload Book Cover*
          <input
            type="file"
            name="coverPhoto"
            hidden
            onChange={handleFileChange}
            accept="image/*"
          />
        </Button>
        {formik.touched.pdf && formik.errors.pdf && (
          <Typography color="error" variant="body2">
            {formik.errors.pdf}
          </Typography>
        )}
        <Button
          variant="outlined"
          component="label"
          fullWidth
          style={{
            margin: "10px 0",
            color: "darkRed",
            borderRadius: "10px",
            borderColor: "darkRed",
            padding: "5px",
          }}
        >
          Upload Book PDF*
          <input
            type="file"
            name="pdf"
            hidden
            onChange={handleFileChange}
            accept="application/pdf"
          />
        </Button>
        {formik.touched.coverPhoto && formik.errors.coverPhoto && (
          <Typography color="error" variant="body2">
            {formik.errors.coverPhoto}
          </Typography>
        )}
      </Box>
      <TextField
        name="brief"
        label="Book Brief"
        variant="outlined"
        value={formik.values.brief}
        onChange={handleChange}
        error={Boolean(formik.errors.brief && formik.touched.brief)}
        helperText={
          formik.touched.brief && formik.errors.brief ? formik.errors.brief : ""
        }
        fullWidth
        margin="normal"
        multiline
        rows={4}
        inputProps={{ maxLength: 800 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
        }}
      >
        <Button variant="text" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          disabled={formik.isSubmitting}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default BookMedia;
