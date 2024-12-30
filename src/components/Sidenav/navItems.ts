import { SvgIconComponent } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

interface NavItem {
  label: string;
  href: string;
  icon: SvgIconComponent;
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "About",
    href: "/about",
    icon: InfoIcon,
  },
];
