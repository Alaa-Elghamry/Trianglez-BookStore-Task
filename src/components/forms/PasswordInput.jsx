import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function PasswordInput({ value, onChange, name, formik }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <Stack sx={{ position: "relative" }}>
      <TextField
        name={name}
        label="Password"
        variant="outlined"
        type={isShowPassword ? "text" : "password"}
        sx={{ "& > :not(style)": { width: "100%" }, mb: "1rem" }}
        value={value}
        onChange={onChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Stack
        onClick={toggleShowPassword}
        sx={{ position: "absolute", right: "15px", top: "15px" }}
      >
        {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </Stack>
    </Stack>
  );
}
