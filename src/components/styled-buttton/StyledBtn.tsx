import { Box, styled } from "@mui/material";
import BackBtn from "../../assets/button.webp";

export const PetButton = styled(Box)(() => ({
  background: `url(${BackBtn})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: 110,
  height: 50,
  marginTop: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: 900,
  fontFamily: "Hat",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
  },
  ":active": {
    animation: "vibrate 0.1s linear infinite",
  },
  "@keyframes vibrate": {
    "0%": { transform: "translate(0)" },
    "25%": { transform: "translate(-2px, 2px)" },
    "50%": { transform: "translate(0)" },
    "75%": { transform: "translate(2px, -2px)" },
    "100%": { transform: "translate(0)" },
  },
}));
