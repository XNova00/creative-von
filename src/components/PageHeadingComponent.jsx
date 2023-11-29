import { Stack, Typography, useTheme} from "@mui/material";

const PageHeadingComponent = ({
  pageTitle,
  subheading,
  variant,
  subheading2,
  sx
}) => {
  const theme = useTheme();
  return (
    <Stack spacing={"24px"} sx={sx}>
      <Typography variant={variant}> {pageTitle} </Typography>
      <Typography variant="body1">{subheading}</Typography>
      <Typography variant="body1">{subheading2}</Typography>
    </Stack>
  );
};

export default PageHeadingComponent;
