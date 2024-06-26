// src/LoginForm.jsx
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLoginFormik from "../../hooks/useLoginFormik";
import LoginFormFields from "./LoginFormFields";
import logo from "../../assets/images/logo.jpg";

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
      <Box sx={{ margin: "0 auto", padding: { sm: 1, md: 2, lg: 4 } }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 2 }}>
          <strong>
            Please enter your email address and password to access your account
          </strong>
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <LoginFormFields formik={formik} />
          <Typography
            variant="p"
            component="p"
            gutterBottom
            color="blue"
            sx={{ fontSize: "14px", mb: "1.5rem", textDecoration: "none" }}
          >
            <strong>
              <a href="/login">Forgot Password?</a>
            </strong>
          </Typography>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ width: "8rem", borderRadius: "10px", mb: 2 }}
          >
            Sign In
          </Button>
          <Box>
            <img src={logo} alt="logo" />
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
