import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { Box } from "@mui/material";
import books from "../assets/images/Books.jpg";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          maxWidth: { xs: "90%", sm: "90%", md: "85%", lg: "100%" },
          maxHeight: { xs: "90vh", sm: "auto" },
          borderRadius: "20px",
          margin: { xs: "5vh auto", sm: "0 auto" },
          overflowY: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <LoginForm />
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", sm: 250, md: 370 } }}
          image={books}
        />
      </Card>
    </div>
  );
}
