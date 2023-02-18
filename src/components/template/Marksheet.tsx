/** @jsxImportSource @emotion/react */

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { fontTypes } from "../../utils/style/fonts";
import { SectionTitle } from "../molecule/SectionTitle";

export const MarkSheet = () => {
  const [ansCount, setAnsCount] = useState(20);
  const [alignment, setAlignment] = useState(0);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Container>
      <SectionTitle
        sxBox={{ mt: 4 }}
        title="Webマークシートについて"
        body={
          "登録不要＆無料でマークシートを10秒で作れる、現役学生が作った学生のためのWebアプリ。\n印刷不要のマークシートで、TOEICの模試など資格試験の勉強をもっと効率的に！"
        }
      />
      <SectionTitle title={"さっそく作る"} />
      <Box px={2} pb={2}>
        <TextField
          variant="filled"
          color="primary"
          label="問題数を入力"
          type="number"
          value={ansCount}
          onChange={(e) => setAnsCount(Math.min(500, parseInt(e.target.value)))}
          sx={{ width: 220 }}
          InputProps={{ inputProps: { min: 0, max: 500 } }}
        />
        <Box position="relative">

        </Box>
      </Box>
    </Container>
  );
};
