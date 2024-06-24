// src/LoginForm.jsx
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLoginFormik from "../../hooks/useLoginFormik";
import LoginFormFields from "./LoginFormFields";

function LoginForm() {
  const formik = useLoginFormik();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Please enter your email address and password to access your account
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <LoginFormFields formik={formik} />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
