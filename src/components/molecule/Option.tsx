/** @jsxImportSource @emotion/react */

import {
  Box,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { fontTypes } from "../../utils/style/fonts";

type OptionProps = {
  name: string;
  value: number;
  setValue: (value: number) => void;
  NOption: number;
};

const abcMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const Option = ({ name, value, setValue, NOption }: OptionProps) => {
  const options = useMemo(() => {
    let res;
    for (let i = 0; i < NOption; i++) {
      res = <ToggleButton value={i}>{abcMap.charAt(i)}</ToggleButton>;
    }
  }, []);

  const [alignment, setAlignment] = useState<string | null>("left");
  const onChange = (event: React.MouseEvent<HTMLElement>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <Typography css={fontTypes.disc} width={32}>
        {name} :{" "}
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        aria-label="Platform"
      >
        <ToggleButton value={0}>A</ToggleButton>
        <ToggleButton value={1}>B</ToggleButton>
        <ToggleButton value={2}>C</ToggleButton>
        <ToggleButton value={3}>D</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
