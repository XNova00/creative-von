import { Box, Grid, ListItem, Typography } from "@mui/material";
import { Fragment } from "react";
import PageHeadingComponent from "../components/PageHeadingComponent";
import { techStackIcons } from "../utils/data";

const HomePage = () => {
  return (
   <Fragment>
   <Grid container spacing={4}>
    <Grid item xs={12} md={8}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}>
        <Box>
    <PageHeadingComponent variant={"h1"} 
          pageTitle={"Creative Designer & Developer"}
          subheading={
            "I’m a web designer & front-end web developer based in Baguio City, Philippines."
          }
         />
         </Box>
         <Box>
          <Typography variant="body2">
          Tech Stack
          </Typography>
           {techStackIcons.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: "flex", gap: 2 }}>
              {row.map((item) => (
                <ListItem key={item.id}>{item.icon}</ListItem>
              ))}
            </Box>
          ))}
          </Box>
          </Box>
    </Grid>
    <Grid item xs={12} md={4} display={"flex"}>
    <img
          src="public/img/Hero Img.png"
          alt="A guy sitting with glasses"
          style={{
            alignSelf: "center",
            width: "100%",
            maxWidth: "350px",
          }}
        />
    </Grid>
   </Grid>
   </Fragment>
  );
};

export default HomePage;
