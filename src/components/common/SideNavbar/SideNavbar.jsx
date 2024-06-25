import { Stack } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../../assets/images/logo.jpg";

function SideNavbar() {
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Stack width="100%" minHeight="100vh" direction="column">
      <Stack alignContent="center" width={130} p={1} margin="0 auto">
        <img src={logo} loading="lazy" width="100%" alt="" />
      </Stack>
      <Stack
        width="100%"
        minHeight="100vh"
        direction="column"
        spacing={2}
        pt={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          p="10px"
          px="15px"
          sx={{
            bgcolor: "#2F80ED",
          }}
          onClick={handleChange}
        >
          <NotificationsIcon />
          <NavLink
            to="/"
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "white",
              marginInlineStart: "15px",
            }}
          >
            Books
          </NavLink>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SideNavbar;
