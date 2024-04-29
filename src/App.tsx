import { Container, Dialog, ThemeProvider } from "@mui/material";
import "./App.css";
import MainSection from "./sections/main";
// import { useState } from "react";
import WelcomePopup from "./components/welcome-popup";
import WelcomeGif from "./assets/gif/welcome.gif";
import Footer from "./sections/footer";
import { theme } from "./styles/theme";
import About from "./sections/about";
import Tokenomics from "./sections/tokenomics";
import Disclaimer from "./sections/disclaimer";
import { useEffect, useState } from "react";
import Loading from "./components/LoadingBar";
import AnimateDivider from "./components/animate-divider/AnimateDivider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ENDPOINT, BACKEND_URI } from "./constant";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUserName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const creatUserMutation = useMutation({
    mutationFn: (userName: string) =>
      axios.post(`${BACKEND_URI}${API_ENDPOINT.CREATE_USER_ENDPOINT}`, {
        username: userName,
      }),
  });

  const { data: userInfo, refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: () =>
      axios
        .post(`${BACKEND_URI}${API_ENDPOINT.GET_USER}`, {
          username: localStorage.getItem("username"),
        })
        .then((res) => res.data),
  });

  const handleUserName = (name: string) => {
    setUserName(name);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Loading loading={loading} />
        <div
          className="wrapper"
          style={{ display: loading ? "none" : "block" }}
        >
          <Container maxWidth="xl" sx={{ px: "0px !important" }}>
            <MainSection userInfo={userInfo} />
            <AnimateDivider />
            <About />
            {/* <HowToBuy /> */}
            <Tokenomics />
            <Disclaimer />
            {/* <PetCounter /> */}
            <Footer />
          </Container>
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
                overflow: "hidden",
                borderRadius: 16,
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
            <WelcomePopup
              username={username}
              handleUserName={handleUserName}
              handleSubmit={() => {
                setOpen(false);
                if (username) {
                  localStorage.setItem("username", username);
                  creatUserMutation.mutate(username);
                  refetch();
                } else {
                  console.log("username is required");
                }
              }}
            />
          </Dialog>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
