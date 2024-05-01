import {
  Box,
  Grid,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Pet from "../assets/img/pet10.png";
import Pet2 from "../assets/img/pet2.png";
import Pet4 from "../assets/img/pet4.png";
import Pet5 from "../assets/img/pet5.png";
import Pet9 from "../assets/img/pet9.png";
type Props = {
  loading: boolean;
};
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 36,
  borderRadius: 24,
  border: "3px solid #36180D",
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: "transparent !important",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 24,
    borderRight: "3px solid #36180D",
    backgroundColor: "#F2EADF",
  },
  [theme.breakpoints.down("sm")]: {
    height: 20,
    borderRadius: 16,
  },
}));

const ProgressLabel = styled(Typography)(() => ({
  position: "absolute",
  left: "52%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
  color: "#1F559E",
}));

const Loading = ({ loading }: Props) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.round(Math.min(oldProgress + 6.67, 100));
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ height: "100vh", display: loading ? "flex" : "none" }}
    >
      <motion.img
        width={isMobile ? 200 : 300}
        src={Pet9}
        initial={{ rotate: -10 }}
        style={{
          position: "absolute",
          left: 10,
          top: 10,
        }}
      />
      <motion.img
        width={isMobile ? 150 : 300}
        src={Pet2}
        initial={{}}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      />
      <motion.img
        width={isMobile ? 100 : 300}
        src={Pet4}
        initial={{}}
        style={{
          position: "absolute",
          right: 60,
          top: 0,
        }}
      />
      {/* <motion.img
        width={400}
        src={Pet4}
        initial={{ rotate: -20 }}
        style={{ position: "absolute", right: window.innerWidth * 0.3 }}
      /> */}
      <motion.img
        width={isMobile ? 150 : 300}
        src={Pet5}
        initial={{}}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <motion.img
        animate={{ rotate: [10, 0, 10] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        src={Pet}
        style={{ height: isMobile ? 200 : 400, width: isMobile ? 200 : 350 }}
      />

      <Box position={"relative"}>
        <BorderLinearProgress
          sx={{ width: 300 }}
          color="secondary"
          variant="determinate"
          value={progress}
        />
        <ProgressLabel color="#FFAF59" variant="subtitle1">
          {progress}%
        </ProgressLabel>
      </Box>
    </Grid>
  );
};

export default Loading;
