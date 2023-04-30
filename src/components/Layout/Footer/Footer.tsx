import React from "react";
import { Box, Container, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box className="footer" sx={{ p: "20px 0px", backgroundColor: "#272727" }}>
      <Box className="container">
        <Typography component="p">
          © MuzKino {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          {` Filmlarga bo'lgan huquq ularning mualliflariga tegishli. Barcha filmlar
        faqat ma'lumot olish uchun mo'ljallangan. Foydalanuvchilar joylashtirgan
        noqonuniy materiallar uchun ma'muriyat javobgar emas! Har qanday film
        mualliflik huquqi egasining iltimosiga binoan olib tashlanadi.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
