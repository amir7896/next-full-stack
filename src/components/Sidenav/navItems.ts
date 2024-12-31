import { SvgIconComponent } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

interface NavItem {
  label: string;
  href?: string; // Optional for items with sublist
  icon: SvgIconComponent;
  children?: NavItem[]; // Sublist items
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "About",
    icon: InfoIcon,
    href: "/about",
  },
  {
    label: "Orders",
    icon: HomeIcon,
    children: [
      {
        label: "List",
        icon: HomeIcon,
        href: "/list",
      },
      {
        label: "Create",
        icon: HomeIcon,
        href: "/create",
      },
    ],
  },
];
