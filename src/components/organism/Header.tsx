/** @jsxImportSource @emotion/react */

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { fontTypes } from "../../utils/style/fonts";
import { grey } from "@mui/material/colors";
export const Header = () => {
  return (
    <Box>
      <AppBar sx={{ background: grey[800] }}>
        <Container>
          <Toolbar style={{ minHeight: 53, height: 53 }}>
            <Typography ml={2} css={fontTypes.title} flexGrow={1}>
              Webマークシート
            </Typography>
            <Button css={fontTypes.body}>
              <Typography css={fontTypes.body} color="white">
                ご意見
              </Typography>
            </Button>
            <Button css={fontTypes.body}>
              <Typography css={fontTypes.body} color="white">
                サイトトップ
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
