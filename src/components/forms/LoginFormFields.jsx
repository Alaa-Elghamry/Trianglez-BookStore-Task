import { Stack, TextField } from "@mui/material";
import React from "react";
import PasswordInput from "./PasswordInput";

export default function LoginFormFields({ formik }) {
  return (
    <>
      <Stack>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          sx={{
            "& > :not(style)": { width: "100%" },
            mb: "1rem",
          }}
          onChange={formik.handleChange}
          value={formik?.values.email}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Stack>

      <PasswordInput
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        formik={formik}
      />
    </>
  );
}
