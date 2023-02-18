/** @jsxImportSource @emotion/react */

import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { fontTypes } from "../../utils/style/fonts";
import { grey } from "@mui/material/colors";
export const Footer = () => {
  return (
    <Box>
      <AppBar sx={{ background: "none" }} elevation={0} position="relative">
        <Container sx={{ borderTop: 1, borderTopColor: "rgba(0, 0, 0, 0.25)" }}>
          <Toolbar style={{ minHeight: 53, height: 53 }}>
            <Link href="http://nekodigi.com/" sx={{ textDecoration: "none" }}>
              <Typography
                ml={2}
                css={[fontTypes.body, { fontWeight: 500 }]}
                color="text.secondary"
                flexGrow={1}
              >
                Webマークシート by Nekodigi
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
