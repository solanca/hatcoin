import { Box, CardContent, Grid, Typography } from "@mui/material";
// import { PetButton } from "../styled-buttton/StyledBtn";
import { styled } from "@mui/material";
import BackBtn from "../../assets/button.webp";
import Pet5 from "../../assets/img/pet4.png";
import { motion } from "framer-motion";
import banner from "../../assets/banner.png";

export const PetButton = styled(Box)(() => ({
  background: `url(${BackBtn})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: 200,
  height: 80,
  marginTop: 8,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: 900,
  fontFamily: "Hat",
  fontSize: "34px",
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
type Props = {
  // username: string;
  // handleUserName: (e: any) => void;
  handleClose: () => void;
};
// const Root = styled(Box)(() => ({
//   position: "relative",
//   display: "flex",
//   //   justifyContent: "center",
//   flexDirection: "column",
//   alignItems: "center",
//   height: 400,
// }));
const WelcomePopup = ({ handleClose }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <motion.img
        src={Pet5}
        style={{ position: "absolute", top: 0, left: -30 }}
        width={200}
        animate={{
          rotate: [10, 0, -10, 0, 10],
          // x: [20, 0, -20, 0, 20],
          y: [-10, 0, -10, 0, -10],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.2, 0.6, 0.8, 1],
          repeat: Infinity,
        }}
      />
      <img src={banner} alt="welcome" width={"100%"} />
      {/* <Root> */}
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Typography mt={4} textAlign={"center"} color={"azure"} variant="h3">
          Welcome to $HAT
        </Typography>
      </Grid>
      <CardContent sx={{ height: { md: 200, sm: 200, xs: 200 } }}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          {/* <Typography>fewjflkdsjalkjlsakdjgkljglskoweijfkadj</Typography> */}
        </Grid>
        <Box sx={{}}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            {/* <Typography mr={2}>Username</Typography> */}

            {/* <input
              className="username"
              aria-label="username"
              style={{ zIndex: 1000 }}
              value={username}
              onChange={(e: any) => handleUserName(e.target.value)}
            /> */}

            {/* </FormControlLabel> */}
          </Grid>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            columnGap={4}
            // mb={30}
            // flexDirection={"column"}
          >
            {/* <Box> */}
            <PetButton onClick={handleClose}>ENTER</PetButton>
            <PetButton>BUY</PetButton>
            {/* <Button variant="contained">ENTER</Button>
            <Button variant="contained" color="info">
              BUY
            </Button> */}
            {/* </Box> */}
          </Grid>
        </Box>
      </CardContent>

      {/* </Root> */}
      {/* <CardActions> */}
      {/* </CardActions> */}
    </div>
  );
};

export default WelcomePopup;
