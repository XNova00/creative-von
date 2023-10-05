import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PageHeadingComponent from "./PageHeadingComponent";
import { socialMediaIcons } from "../utils/data";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Box>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PageHeadingComponent
            variant={"h3"}
            fontWeight={{ fontWeight: "500" }}
            pageTitle={"Contact me at"}
          />
          <Box sx={{ display: "flex", gap: "24px" }}>
            {socialMediaIcons.map((item) => (
              <Button key={item.id}>
                <Link to={item.path}>{item.icon}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
