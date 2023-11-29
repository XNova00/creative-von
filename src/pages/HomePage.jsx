import { Box, Grid, Hidden, ListItem, Typography } from "@mui/material";
import { Fragment } from "react";
import PageHeadingComponent from "../components/PageHeadingComponent";
import { techStackIcons } from "../utils/data";

const HomePage = () => {
  return (
   <Fragment>
    <Box sx={{
      display: "flex",
      maxWidth: "1440px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",  
    }}>
   <Grid container spacing={4} alignItems={"center"}>
    <Grid item xs={12} sm={7} lg={8}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: {xs: "6px"},
      }}>
        <Box>
    <PageHeadingComponent variant={"h1"} 
          pageTitle={"Creative Designer & Developer"}
          subheading={
            "I’m a web designer & front-end web developer based in Baguio City, Philippines."
          }
          sx={{textAlign: {xs: "center", sm: "left"}}}
         />
         </Box>
         <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: {xs: "12px", sm: "24px"},
      }}>
          <Typography variant="body2" sx={{textAlign: {xs: "center", md: "left"}}}>
          Tech Stack
          </Typography>
           {techStackIcons.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: "flex", gap: 2 }}>
              {row.map((item) => (
                <ListItem key={item.id} sx={{display: "flex", justifyContent: {xs: "center", sm: "flex-start"}}}>{item.icon}</ListItem>
              ))}
            </Box>
          ))}
          </Box>
          </Box>
    </Grid>
    <Grid item xs={12} sm={5} lg={4} display={"flex"} justifyContent={"center"}>
    <Hidden smDown>
    <img
          src="public/img/Hero Img.png"
          alt="A guy sitting with glasses"
          style={{
            alignSelf: "center",
            width: "100%",
            maxWidth: "350%",
          }}
        />
        </Hidden>
    </Grid>
   </Grid>
   </Box>
   </Fragment>
  );
};

export default HomePage;
