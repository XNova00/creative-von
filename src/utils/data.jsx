import {
  AppleIcon,
  BootstrapIcon,
  CssIcon,
  FacebookIcon,
  FigmaIcon,
  GithubIcon,
  GmailIcon,
  HtmlIcon,
  JavascriptIcon,
  LinkedIcon,
  MuiIcon,
  ReactIcon,
} from "../components/IconSvgComponent";

export const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Project", path: "/project" },
];

export const techStackIcons = [
  [
    { id: 1, icon: <FigmaIcon /> },
    { id: 2, icon: <HtmlIcon /> },
    { id: 3, icon: <CssIcon /> },
    { id: 4, icon: <BootstrapIcon /> },
  ],
  [
    { id: 5, icon: <JavascriptIcon /> },
    { id: 6, icon: <MuiIcon /> },
    { id: 7, icon: <ReactIcon /> },
    { id: 8, icon: <GithubIcon /> },
  ],
];

export const socialMediaIcons = [
  { id: 1, icon: <FacebookIcon /> },
  { id: 2, icon: <LinkedIcon /> },
  { id: 3, icon: <AppleIcon /> },
  { id: 4, icon: <GmailIcon /> },
];
