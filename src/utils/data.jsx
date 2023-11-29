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
  { id: 2, title: "Project", path: "/project", page: <ProjectPage /> },
  { id: 3, title: "About", path: "/about", page: <AboutPage /> },
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
export const projectsData = [
  {
    id: 0,
    image: "img/Happy Wally UI.png",
    title: "Happy Wally Design",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 1,
    image: "img/App Screenshot.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 2,
    image: "img/AI Chat.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 3,
    image: "img/Jerkdolls Banner.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 4,
    image: "img/My4EverLove - Design.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 5,
    image: "img/Orbital SEO - Design.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 6,
    image: "img/Recruitment - Design.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  {
    id: 7,
    image: "img/LandingPage - Design.png",
    title: "App Screenshot",
    text: "Introducing Happy Wally: Your Personal Happiness Companion. Our UI/UX design project is centered around creating an immersive and uplifting experience where users can freely express their feelings and find joy in their journey towards happiness.",
  },
  
];

export const socialMediaIcons = [
  { id: 1, icon: <FacebookIcon />, path: "https://www.facebook.com/makavonprz"},
  { id: 2, icon: <LinkedIcon />, path: "makavonperez@icloud.com"},
  { id: 3, icon: <AppleIcon />, path: "makavonperez@icloud.com"},
  { id: 4, icon: <GmailIcon />, path: "vvon111420@gmail.com"},
];
