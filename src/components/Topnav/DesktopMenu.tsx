import React from "react";
import { Box, IconButton, Badge, Menu, MenuItem } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const DesktopMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {/* Mail Icon */}
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>

      {/* Notifications Icon */}
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      {/* Account Circle with Menu */}
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default DesktopMenu;
