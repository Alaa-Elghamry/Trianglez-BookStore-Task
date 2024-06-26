import { Stack } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import logo from "../../../assets/images/logo.jpg";

function SideNavbar() {
  const [isExpanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Stack width="100%" minHeight="100vh" direction="column">
      <Stack
        sx={{
          margin: " 0 auto",
          cursor: "pointer",
          width: "130px",
          padding: "10px",
          alignContent: "center",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
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
          p="15px"
          px="15px"
          sx={{
            bgcolor: "rgb(233, 245, 249)",
            color: "black",
            borderRight: "3px solid rgb(137, 93, 110)",
          }}
          onClick={handleChange}
        >
          <LibraryBooksIcon />
          <NavLink
            to="/"
            style={{
              fontSize: "16px",
              fontFamily: "inter",
              fontWeight: "600",
              textDecoration: "none",
              marginInlineStart: "20px",
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
