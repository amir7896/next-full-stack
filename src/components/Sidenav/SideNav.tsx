import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { SideNavItem } from "./SideNavItem";
import { navItems } from "./navItems";

interface SideNavProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ mobileOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const drawerWidth = 240;

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            [`& .MuiDrawer-paper`]: { width: drawerWidth },
          }}
        >
          <Box>
            <Toolbar />
            <List>
              {navItems.map((item) => (
                <SideNavItem
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  onClick={onClose}
                >
                  {item.children?.map((child) => (
                    <SideNavItem
                      key={child.label}
                      href={child.href}
                      icon={child.icon}
                      label={child.label}
                    />
                  ))}
                </SideNavItem>
              ))}
            </List>
          </Box>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box>
            <Toolbar />
            <List sx={{ padding: "4px" }}>
              {navItems.map((item) => (
                <SideNavItem
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                >
                  {item.children?.map((child) => (
                    <SideNavItem
                      key={child.label}
                      href={child.href}
                      icon={child.icon}
                      label={child.label}
                    />
                  ))}
                </SideNavItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default SideNav;
