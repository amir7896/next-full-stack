import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideNavItemProps {
  href?: string;
  icon: React.ElementType;
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
  depth?: number; // Depth level of the item for padding
}

export const SideNavItem: React.FC<SideNavItemProps> = ({
  href,
  icon: Icon,
  label,
  children,
  onClick,
  depth = 0, // Default depth level
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  const isActive = href ? pathname === href : false;

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const hasChildren = Boolean(children);

  return (
    <>
      <ListItem
        component={href ? Link : "div"} // Link for main items, div for expandable items
        href={href}
        onClick={href ? onClick : toggleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: isActive
            ? theme.palette.custom.active
            : "transparent",
          color: isActive ? "#fff" : "inherit",
          borderRadius: "6px",
          padding: "8px 16px",
          margin: "3px 0",
          border: `1px solid ${theme.palette.custom.border}`,
          paddingLeft: `${16 + depth * 16}px`, // Adjust padding based on depth
          "&:hover": {
            backgroundColor: theme.palette.custom.hover,
            color: "#fff",
            border: `2px solid ${theme.palette.custom.border}`,
          },
          transition: "background-color 0.3s, color 0.3s, border 0.3s",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: "unset",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
            height: "20px",
            color: isActive ? "#fff" : "inherit",
          }}
        >
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          sx={{
            display: "flex",
            alignItems: "center",
            margin: 0,
          }}
          primary={
            <Typography
              sx={{
                fontWeight: isActive ? "bold" : "normal",
                fontSize: "1rem",
                lineHeight: "1",
                mt: 0.4,
              }}
            >
              {label}
            </Typography>
          }
        />
        {hasChildren && (
          <ListItemIcon
            sx={{
              marginLeft: "auto", // Align arrow icon to the far right
              color: isActive ? "#fff" : "inherit",
            }}
          >
            {open ? <ExpandMore /> : <ChevronRight />}
          </ListItemIcon>
        )}
      </ListItem>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement, {
                depth: depth + 1, // Increase depth for child items
              })
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};
