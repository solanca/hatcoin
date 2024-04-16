import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/logo/logo.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
type Props = {};

const Header = (_props: Props) => {
  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none", px: 10 }}>
      <Toolbar>
        <img src={logo} alt="logo" width={50} style={{ borderRadius: "50%" }} />
        <Typography ml={4}>$Hat</Typography>
        <Box flexGrow={1} />
        <Box>
          <IconButton>
            <TelegramIcon />
          </IconButton>
          <IconButton sx={{ ml: 4 }}>
            <XIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
