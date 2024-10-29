import { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { TitleContext, ValueType } from "@/context/TitleContext/TitleContext";

interface IData {
  url: string;
  title: string;
  subtitle?: string;
}
const SectionHeader = ({ title, subtitle, url }: IData) => {
  const router = useRouter();
  const { changeTitle } = useContext<ValueType>(TitleContext);

  const handleClick = (data: IData): void => {
    changeTitle(data);
    router.push(data.url);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "10px",
        pb: "20px",
      }}
      className="section-header"
    >
      <Box>
        <Typography component="h2" className="section-title">
          {title}
        </Typography>
        <Typography component="p" className="section-sub-title">
          {subtitle}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color={"success"}
        onClick={() => handleClick({ title, url })}
      >
        Barchasi
      </Button>
    </Box>
  );
};

export default SectionHeader;
