import { Dialog, ThemeProvider } from "@mui/material";
import "./App.css";
import MainSection from "./sections/main";
// import { useState } from "react";
import WelcomePopup from "./components/welcome-popup";
import WelcomeGif from "./assets/gif/welcome.gif";
import Header from "./components/header";
import Footer from "./sections/footer";
import { theme } from "./styles/theme";
import About from "./sections/about";
import HowToBuy from "./sections/how-to-buy";
import Tokenomics from "./sections/tokenomics";
import Disclaimer from "./sections/disclaimer";

function App() {
  // const [open, setOpen] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <MainSection />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Disclaimer />
        {/* <PetCounter /> */}
        <Footer />
        <Dialog
          open={false}
          // onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              background: "linear-gradient(to top, #7ec850 0%, #387c44 100%)",
              boxShadow: "none",
              position: "relative",
              // height: 400,
            },
          }}
        >
          <img
            src={WelcomeGif}
            style={{ position: "absolute", bottom: 0 }}
            width={"100%"}
            // height={"100%"}
          />
          <WelcomePopup />
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
