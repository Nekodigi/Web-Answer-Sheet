import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useMemo } from "react";

type OptionProps = {
  value: number;
  setValue: (value: number) => void;
  NOption: number;
};

const abcMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const Option = ({ value, setValue, NOption }: OptionProps) => {
  const options = useMemo(() => {
    let res;
    for(int i=0; i<NOption; i++){
      res = <ToggleButton value={i}>{abcMap.charAt(i)}</ToggleButton>
    }
  }, []);

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={0}>A</ToggleButton>
      <ToggleButton value={1}>B</ToggleButton>
      <ToggleButton value={2}>C</ToggleButton>
      <ToggleButton value={3}>D</ToggleButton>
    </ToggleButtonGroup>
  );
};
