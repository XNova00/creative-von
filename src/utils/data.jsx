import { AppleIcon, FbIcon, GmailIcon, LinkedInIcon } from "../components/IconSvgComponent";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";

export const navItems = [
    {
      id: 0, 
      name: "Home",
      page: <HomePage />,
      path: "/",
    },
    {
      id: 1, 
      name: "Project",
      page: <ProjectPage />,
      path: "/project",
    },
    {
      id: 2, 
      name: "About",
      page: <AboutPage />,
      path: "/about-page",
    },
  ];
  export const socialMediaIcons = [
    { id: 1, icon: <FbIcon /> },
    { id: 2, icon: <LinkedInIcon /> },
    { id: 3, icon: <AppleIcon /> },
    { id: 4, icon: <GmailIcon /> },
  ];
