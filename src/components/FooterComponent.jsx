import { Box, IconButton, Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import { socialMediaIcons } from "../utils/data"

const FooterComponent = () => {
  return (
    <Fragment>
      <Stack>
        <Box>
        <Typography variant="body1">
          CONTACT ME AT
        </Typography>
        </Box>
        <Stack direction="row">
        {socialMediaIcons.map((item) => (
          <Box key={item}>
            <IconButton>{item.icon}</IconButton>
        </Box>
        ))}
      </Stack>
      </Stack>
    </Fragment>
  )
}

export default FooterComponent