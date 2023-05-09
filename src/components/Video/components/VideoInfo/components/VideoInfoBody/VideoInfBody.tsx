import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const VideoInfBody = () => {
  return (
    <Box
      className="video_info_body"
      sx={{
        py: "10px",
      }}
    >
      <Typography component="p" sx={{ pb: "5px", lineHeight: "25px" }}>
        Kino tavsifi
      </Typography>
      <Typography component="p">
        {`Maxluqlar uyasi / Mahluqlar uyasi - Afg'onistonda
        qo'zg'olonchilar tomonidan qochib ketayotganda urib tushirilgan uchuvchi
        leytenant Keyt Sinkler tashlandiq er osti bunkerida yashirinib yuribdi,
        u erda halokatli biologik qurol uyg'onadi - afg'on urushi paytida ruslar
        tomonidan yaratilgan o'zga sayyoralik bilan kesib o'tgan odam.
        Пилот-лейтенант Кейт Синклер, сбитая повстанцами в Афганистане, убегая
        от них, прячется в заброшенном подземном бункере, где пробуждается
        смертоносное биологическое оружие — человек, скрещенный с
        инопланетянином, созданное русскими во времена афганской войны.`}
      </Typography>
    </Box>
  );
};

export default VideoInfBody;
