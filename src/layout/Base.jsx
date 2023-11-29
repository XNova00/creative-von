import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { navItems } from "../utils/data";
import { Link, Outlet } from "react-router-dom";
import { LogoSvg, MenuIcon } from "../components/IconSvgComponent";


const drawerWidth = 240;

function Base(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <LogoSvg />
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            {item.title}
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{display: { xs: "none", sm: "flex" }, justifyContent: "space-between", flexGrow: 1, }}>
              <LogoSvg />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "24px" }}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center",
          px: { xs: "16px", sm: "48px", md: "0px" },
          height: "100vh",  
        }}>
        <Outlet />
        </Box>
      </Box>
      
  );
}
Base.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Base;
