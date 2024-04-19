import { Container, Dialog, ThemeProvider } from "@mui/material";
import "./App.css";
import MainSection from "./sections/main";
// import { useState } from "react";
import WelcomePopup from "./components/welcome-popup";
import WelcomeGif from "./assets/gif/welcome.gif";
import Footer from "./sections/footer";
import { theme } from "./styles/theme";
import About from "./sections/about";
import HowToBuy from "./sections/how-to-buy";
import Tokenomics from "./sections/tokenomics";
import Disclaimer from "./sections/disclaimer";
import { useEffect, useState } from "react";
import Loading from "./components/LoadingBar";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Loading loading={loading} />
        <div
          className="wrapper"
          style={{ display: loading ? "none" : "block" }}
        >
          <Container maxWidth="xl" sx={{ px: "0px !important" }}>
            <MainSection />
            <About />
            <HowToBuy />
            <Tokenomics />
            <Disclaimer />
            {/* <PetCounter /> */}
            <Footer />
          </Container>
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
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
