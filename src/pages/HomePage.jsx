import { Box, Grid, ListItem, Typography, useMediaQuery } from "@mui/material";
import PageHeadingComponent from "../components/PageHeadingComponent";
import { techStackIcons } from "../utils/data";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      rowSpacing={isSmallScreen ? 2 : 4}
      columnSpacing={isSmallScreen ? 2 : 4}
      direction="row"
      display="flex"
      justifyContent={"space-between"}
    >
      <Grid
        item
        xs={12}
        lg={6}
        display={"flex"}
        flexDirection={"column"}
        gap={isSmallScreen ? 2 : 4}
      >
        <PageHeadingComponent
          variant={"h1"}
          fontWeight={{ fontWeight: "500" }}
          pageTitle={"Creative Designer & Developer"}
          subheading={
            "I’m a web designer & front-end web developer based in Baguio City, Philippines."
          }
        />
        <Typography variant="body1">Tech Stack</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          {techStackIcons.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: "flex", gap: 2 }}>
              {row.map((item) => (
                <ListItem key={item.id}>{item.icon}</ListItem>
              ))}
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg="auto">
        <img
          src="public/img/Hero Img.png"
          alt="A guy sitting with glasses"
          style={{
            maxWidth: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
