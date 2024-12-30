import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideNavItemProps {
  href: string;
  icon: React.ElementType; // Component type for icons
  label: string; // Ensure label is a required prop
  onClick?: () => void;
}

export const SideNavItem: React.FC<SideNavItemProps> = ({
  href,
  icon: Icon,
  label,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ListItem
      component={Link}
      href={href}
      onClick={onClick}
      sx={{
        backgroundColor: isActive ? "rgba(0, 0, 0, 0.08)" : "transparent",
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} /> {/* Render the label */}
    </ListItem>
  );
};
