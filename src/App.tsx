import { Dialog } from "@mui/material";
import "./App.css";
import MainSection from "./sections/main";
import { useState } from "react";
import WelcomePopup from "./components/welcome-popup";
import WelcomeGif from "./assets/gif/welcome.gif";
import Header from "./components/header";
import PetCounter from "./sections/pet";
import Footer from "./sections/footer";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Header />
      <MainSection />
      <PetCounter />
      <Footer />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
  );
}

export default App;
