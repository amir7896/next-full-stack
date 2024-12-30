import React from "react";
import { Box, IconButton, Menu, MenuItem, Badge } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MobileMenu: React.FC = () => {
  const [mainAnchorEl, setMainAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [profileAnchorEl, setProfileAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMainMenuOpen = Boolean(mainAnchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMainAnchorEl(event.currentTarget);
  };

  const handleMainMenuClose = () => {
    setMainAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <>
      {/* Main Menu */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls="mobile-menu"
          aria-haspopup="true"
          onClick={handleMainMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      <Menu
        id="mobile-menu"
        anchorEl={mainAnchorEl}
        keepMounted
        open={isMainMenuOpen}
        onClose={handleMainMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>

      {/* Profile Menu */}
      <Menu
        id="profile-menu"
        anchorEl={profileAnchorEl}
        keepMounted
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
