import { Dialog } from "@mui/material";
import "./App.css";
import MainSection from "./sections/main";
import { useState } from "react";
import WelcomePopup from "./components/welcome-popup";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <MainSection />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <WelcomePopup />
      </Dialog>
    </>
  );
}

export default App;
