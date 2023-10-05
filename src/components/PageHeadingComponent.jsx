import { Stack, Typography, useTheme} from "@mui/material";

const PageHeadingComponent = ({
  pageTitle,
  subheading,
  variant,
  subheading2,
  fontWeight,
  sx,
}) => {
  const theme = useTheme();
  return (
    <Stack spacing={"8px"} sx={sx}>
      <Typography variant={variant} sx={fontWeight}> {pageTitle} </Typography>
      <Typography variant="body1">{subheading}</Typography>
      <Typography variant="body1" sx={{
        color: theme.palette.primary.main,
      }}>{subheading2}</Typography>
    </Stack>
  );
};

export default PageHeadingComponent;
