import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import SideNavbar from "../../components/common/SideNavbar/SideNavbar";

export default function MainLayout() {
  return (
    <Grid container>
      <Grid
        item
        display={{ xs: "none", sm: "grid" }}
        sm={2}
        sx={{
          background: "white",
          boxSizing: "border-box",
        }}
      >
        <SideNavbar />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
  );
}
