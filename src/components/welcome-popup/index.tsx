import { Box, CardContent, Grid, TextField, Typography } from "@mui/material";
// import { PetButton } from "../styled-buttton/StyledBtn";
import { styled } from "@mui/material";
import BackBtn from "../../assets/button.webp";

export const PetButton = styled(Box)(() => ({
  background: `url(${BackBtn})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: 110,
  height: 50,
  marginTop: 8,
  zIndex: 1000,
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
type Props = {
  username: string;
  handleUserName: (e: any) => void;
  handleSubmit: () => void;
};
// const Root = styled(Box)(() => ({
//   position: "relative",
//   display: "flex",
//   //   justifyContent: "center",
//   flexDirection: "column",
//   alignItems: "center",
//   height: 400,
// }));
const WelcomePopup = ({ username, handleUserName, handleSubmit }: Props) => {
  return (
    <>
      {/* <Root> */}
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Typography mt={4} textAlign={"center"} color={"azure"} variant="h4">
          Welcome to $HAT from $WFH
        </Typography>
      </Grid>
      <CardContent sx={{ height: 100 }}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography>fewjflkdsjalkjlsakdjgkljglskoweijfkadj</Typography>
        </Grid>
      </CardContent>
      {/* </Root> */}
      {/* <CardActions> */}
      <Grid container justifyContent={"center"}>
        <TextField
          value={username}
          onChange={(e: any) => handleUserName(e.target.value)}
        />
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
        <PetButton onClick={handleSubmit}>ENTER</PetButton>
        <PetButton>BUY</PetButton>
        {/* <Button variant="contained">ENTER</Button>
            <Button variant="contained" color="info">
              BUY
            </Button> */}
        {/* </Box> */}
      </Grid>
      {/* </CardActions> */}
    </>
  );
};

export default WelcomePopup;
