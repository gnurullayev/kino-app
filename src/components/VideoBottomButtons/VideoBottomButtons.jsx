import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const VideoBottomButtons = () => {
  return (
    <Box
      className="movie__video_btn--group"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          color={"success"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <PlayCircleIcon />
          <Typography component={"span"}>Treyler</Typography>
        </Button>

        <Button
          variant="outlined"
          color={"success"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <DownloadIcon />
          <Typography component={"span"}>Yuklab olish</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          color={"success"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <ThumbUpIcon />
          <Typography component={"span"}>50</Typography>
        </Button>

        <Button
          variant="outlined"
          color={"success"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <ThumbDownIcon />
          <Typography component={"span"}>2</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default VideoBottomButtons;
