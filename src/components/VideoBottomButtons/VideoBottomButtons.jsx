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
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "340px 200px" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        py: "8px",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
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
          <PlayCircleIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
          <Typography
            component={"span"}
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
          >
            Treyler
          </Typography>
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
          <DownloadIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
          <Typography
            component={"span"}
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
          >
            Yuklab olish
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
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
            width: "100%",
          }}
        >
          <ThumbUpIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
          <Typography
            component={"span"}
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
          >
            50
          </Typography>
        </Button>

        <Button
          variant="outlined"
          color={"success"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            width: "100%",
          }}
        >
          <ThumbDownIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
          <Typography
            component={"span"}
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
          >
            2
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default VideoBottomButtons;
