"use client";

import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Toolbar } from "@mui/material";
import theme from "../them";
import TopNav from "@/components/Topnav/TopNav";
import SideNav from "@/components/Sidenav/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseNav = () => {
    setMobileOpen(false); // Close the side nav when a link is clicked
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <TopNav onMenuClick={handleMenuClick} />
            <SideNav mobileOpen={mobileOpen} onClose={handleCloseNav} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 1,
              }}
            >
              <Toolbar />
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
