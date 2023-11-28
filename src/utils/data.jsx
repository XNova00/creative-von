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
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";

export const navItems = [
  { id: 1, title: "Home", path: "/", page: <HomePage />,},
  { id: 2, title: "About", path: "/about", page: <AboutPage /> },
  { id: 3, title: "Project", path: "/project", page: <ProjectPage /> },
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
