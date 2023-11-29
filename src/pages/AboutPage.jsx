import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { socialMediaIcons } from "../utils/data";


const AboutPage = () => {
  return (
    <Fragment>
     <Box sx={{
      display: "flex",
      maxWidth: "1440px",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: "100px",
      mb: "50px",
       
    }}>
         <Grid container spacing={6}>
          <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h1">
          ABOUT ME
          </Typography>
          <Box sx={{ display: "flex"}}>
            {socialMediaIcons.map((item) => (
              <Button key={item.id}>
                <Link to={item.path}>{item.icon}</Link>
              </Button>
            ))}
          </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/img/AboutME.png" alt="Design and develop slogan" />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            &quot;Hello! I&apos;m Michael Von, a passionate and innovative web
            designer and front-end web developer. With a strong eye for
            aesthetics and an understanding of user experience, I believe that
            good design is not only visually appealing but also user-centric. My
            goal is to merge creativity with technical expertise to craft
            websites that not only look stunning but also provide seamless
            navigation and optimal performance across various devices and
            platforms.
            <br />
            <br />
            If you&apos;re looking for a creative web designer and front-end web
            developer who can transform your digital presence into a compelling
            experience, let&apos;s connect. Together, we can bring your ideas to life
            and make an impact in the digital world.&quot;
          </Typography>
          </Grid>
         </Grid>
    </Box>
   </Fragment>
  );
}

export default AboutPage