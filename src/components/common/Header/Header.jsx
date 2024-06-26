import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/authSlice";

function Header() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Stack
      bgcolor="white"
      p={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="500"
      boxShadow="0px 2px 1px rgba(0, 0, 0, 0.1)"
    >
      <Typography
        gutterBottom
        component="div"
        fontSize="18px"
        fontWeight="500"
        color="blue"
        marginLeft={2}
      >
        Acore Admin Dashboard
      </Typography>
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ mt: 4 }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>
    </Stack>
  );
}

export default Header;
