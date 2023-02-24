/** @jsxImportSource @emotion/react */

import {
  AppBar,
  Box,
  Button,
  Container,
  css,
  FormControl,
  Link,
  MenuItem,
  Select,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { fontTypes } from "../../utils/style/fonts";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export const Footer = () => {
  const { t, i18n } = useTranslation("common");
  const [language, setLanguage] = useState(i18n.language.substring(0, 2));

  return (
    <Box>
      <AppBar sx={{ background: "none" }} elevation={0} position="relative">
        <Container sx={{ borderTop: 1, borderTopColor: "rgba(0, 0, 0, 0.25)" }}>
          <Toolbar style={{ minHeight: 53, height: 53 }}>
            <Link
              href="http://nekodigi.com/"
              sx={{ textDecoration: "none" }}
              flexGrow={1}
            >
              <Typography
                ml={2}
                css={[fontTypes.body, { fontWeight: 500 }]}
                color="text.secondary"
                flexGrow={1}
              >
                {t("name")!} by Nekodigi
              </Typography>
            </Link>
            <Box css={[itemBox]}>
              <FormControl variant="standard">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Language"
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    i18n.changeLanguage(e.target.value);
                  }}
                  css={baseFont}
                  sx={{ width: 96 }}
                >
                  <MenuItem css={baseFont} value="en">
                    English
                  </MenuItem>
                  <MenuItem css={baseFont} value="ja">
                    日本語
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

const baseFont = css([fontTypes.body, { fontWeight: 500 }]);

const itemBox = css([
  {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    textTransform: "none",
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    gap: 12,
  },
  fontTypes.subtitle,
]);
