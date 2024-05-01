import { Box, IconButton, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import Logo from "../../assets/logo/logo.png";

type Props = {};

const Header = (_props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 10,
        zIndex: 1,
        left: { md: 40, sm: 10, xs: 4 },
        right: { md: 40, sm: 10, xs: 4 },
      }}
    >
      <img src={Logo} alt="logo" width={50} style={{ borderRadius: "50%" }} />
      <Typography
        variant="h4"
        ml={2}
        sx={{
          textShadow:
            "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
        }}
      >
        $Hat
      </Typography>
      <Box flexGrow={1} />
      <Box>
        <IconButton>
          <TelegramIcon sx={{ color: "pink" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/beanie"
          target="_blank"
          sx={{ ml: 4 }}
        >
          <XIcon sx={{ color: "pink" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
