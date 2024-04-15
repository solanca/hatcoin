import { Box, Typography, styled } from "@mui/material";
import WelcomeGif from "../../assets/gif/welcome.gif";
type Props = {};
const Root = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  //   alignItems: "center",
  height: 400,
}));
const WelcomePopup = (_props: Props) => {
  return (
    <Root>
      <img
        src={WelcomeGif}
        style={{ position: "absolute", bottom: 0 }}
        width={"100%"}
        // height={"100%"}
      />
      <Typography color={"azure"}>Welcome to $HAT from $WFH</Typography>
    </Root>
  );
};

export default WelcomePopup;
