import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import WelcomeGif from "../../assets/gif/welcome.gif";
type Props = {};
const Root = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  //   justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: 400,
}));
const WelcomePopup = (_props: Props) => {
  return (
    <>
      {/* <Root> */}
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Typography mt={4} color={"azure"}>
          Welcome to $HAT from $WFH
        </Typography>
      </Grid>
      <CardContent sx={{ height: 200 }}>
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
      <CardActions>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box>
            <Button variant="contained">ENTER</Button>
            <Button variant="contained" color="info">
              BUY
            </Button>
          </Box>
        </Grid>
      </CardActions>
    </>
  );
};

export default WelcomePopup;
