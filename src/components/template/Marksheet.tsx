/** @jsxImportSource @emotion/react */

import { Box, Container, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { AnswersContext } from "../../utils/context/answers";
import { Option } from "../molecule/Option";
import { SectionTitle } from "../molecule/SectionTitle";
import { Delete, Download, Upload, Settings } from "@mui/icons-material";
import { downloadJson } from "../../utils/func/download";
import { Confirm } from "../molecule/Confirm";

export const MarkSheet = () => {
  const [ansCount, setAnsCount] = useState(20);
  const [open, setOpen] = useState(false);

  if (localStorage.getItem("answer") === null)
    localStorage.setItem("answer", JSON.stringify([]));
  const [answers, setAnswers] = useState<number[]>(
    JSON.parse(localStorage.getItem("answer")!)
  );
  const artifactValue = { answers, setAnswers };

  const onDownload = () => {
    downloadJson(
      {
        answers: answers,
        format: "webAnswerSheet",
        version: 1,
        source: "webAnswerSheet",
      },
      "answerSheet.json"
    );
  };

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    try {
      let obj = JSON.parse(await e.target.files[0].text()) as any;
      setAnswers(obj.answers);
      console.log("upload");
    } catch {}
  };

  return (
    <AnswersContext.Provider value={artifactValue}>
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
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              variant="filled"
              color="primary"
              label="問題数を入力"
              type="number"
              value={ansCount}
              onChange={(e) =>
                setAnsCount(Math.min(500, parseInt(e.target.value)))
              }
              sx={{ width: 220 }}
              InputProps={{ inputProps: { min: 0, max: 500 } }}
            />
            <IconButton aria-label="download" size="large" onClick={onDownload}>
              <Download />
            </IconButton>
            <IconButton aria-label="upload" size="large" component="label">
              <input hidden onChange={onUpload} type="file" accept=".json" />
              <Upload />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => setOpen(true)}
            >
              <Delete />
            </IconButton>
            <Confirm
              open={open}
              setOpen={() => setOpen(false)}
              onOK={() => {
                setAnswers([]);
              }}
              title="回答を削除しますか？"
              disc="削除した回答は復元できません。よろしいですか？"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            rowGap={1}
            columnGap={4}
            mt={2}
            flexWrap="wrap"
            maxHeight={1122}
          >
            {ansCount
              ? [...Array(ansCount)].map((_, i) => (
                  <Option
                    name={`${i + 1}`}
                    value={answers[i]}
                    setValue={(v) => {
                      answers[i] = v;
                      setAnswers([...answers]);
                      localStorage.setItem("answer", JSON.stringify(answers));
                    }}
                    NOption={4}
                  />
                ))
              : undefined}
          </Box>
        </Box>
      </Container>
    </AnswersContext.Provider>
  );
};
