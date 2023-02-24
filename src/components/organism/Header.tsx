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
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const Header = () => {
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    document.title = t("name");
  }, [i18n.language]);
  return (
    <Box>
      <AppBar sx={{ background: grey[800] }}>
        <Container>
          <Toolbar style={{ minHeight: 53, height: 53 }}>
            <Typography ml={2} css={fontTypes.title} flexGrow={1}>
              {t("name")!}
            </Typography>
            <Button
              css={fontTypes.body}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjgdW5jxjGz6q0e_vC8CraA8wk5_k3WrIew6SDcybwv98IWg/viewform?usp=sf_link"
            >
              <Typography
                css={fontTypes.body}
                sx={{ display: { xs: "none", sm: "block" } }}
                color="white"
              >
                {t("opinion")!}
              </Typography>
            </Button>
            <Button
              css={fontTypes.body}
              sx={{ display: { xs: "none", sm: "block" } }}
              href="http://nekodigi.com/"
            >
              <Typography css={fontTypes.body} color="white">
                {t("site_top")!}
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
