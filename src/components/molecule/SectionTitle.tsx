/** @jsxImportSource @emotion/react */

import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import { useContext, useEffect } from "react";
import { fontFamilies, fontSizes, fontTypes } from "../../utils/style/fonts";

export type SectionTitleProps = {
  title?: string;
  subTitle?: string;
  body?: string;
  sx?: SxProps;
  sxBox?: SxProps;
};
export const SectionTitle = (props: SectionTitleProps) => {
  const { title, subTitle, body, sx, sxBox } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      p={2}
      style={{
        color: "text.primary",
      }}
      sx={sxBox}
    >
      {title === undefined ? null : (
        <Typography css={fontTypes.title} style={{ fontWeight: 700 }} sx={sx}>
          {title}
        </Typography>
      )}
      {subTitle === undefined ? null : (
        <Typography
          css={[fontFamilies.Jp, fontSizes.px24]}
          style={{ fontWeight: 700 }}
          sx={sx}
        >
          {subTitle}
        </Typography>
      )}
      {body === undefined ? null : (
        <Typography
          css={[fontFamilies.Jp, fontSizes.px16]}
          style={{ fontWeight: 500 }}
          sx={sx}
        >
          {body}
        </Typography>
      )}
    </Box>
  );
};
