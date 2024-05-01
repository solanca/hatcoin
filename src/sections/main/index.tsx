import {
  // Box,
  Card,
  CardActions,
  Grid,
  Typography,
  // styled,
} from "@mui/material";
import { useEffect, useState } from "react";

// Importing all pet images
import Pet1 from "../../assets/img/pet1.png";
import Pet2 from "../../assets/img/pet2.png";
import Pet3 from "../../assets/img/pet3.png";
import Pet4 from "../../assets/img/pet4.png";
import Pet5 from "../../assets/img/pet5.png";
import Pet6 from "../../assets/img/pet6.png";
import Pet7 from "../../assets/img/pet7.png";
import Pet8 from "../../assets/img/pet8.png";
import Pet9 from "../../assets/img/pet9.png";
import Pet10 from "../../assets/img/pet10.png";
import Pet1Icon from "../../assets/img/pet1.webp";
import Pet2Icon from "../../assets/img/pet2.webp";
import Pet3Icon from "../../assets/img/pet3.webp";
import Pet4Icon from "../../assets/img/pet4.webp";
import Pet5Icon from "../../assets/img/pet5.webp";
import Pet6Icon from "../../assets/img/pet6.webp";
import Pet7Icon from "../../assets/img/pet7.webp";
import Pet8Icon from "../../assets/img/pet8.webp";
import Pet9Icon from "../../assets/img/pet9.webp";
import Pet10Icon from "../../assets/img/pet10.webp";
import { motion } from "framer-motion";
// import ButtonBackground from "../../assets/button.webp";
import SnowEffect from "../../components/showflake/SnowEffect";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API_ENDPOINT, BACKEND_URI } from "../../constant";
import axios from "axios";
import { UserResponse } from "../../types/response";
import AnimateDivider from "../../components/animate-divider/AnimateDivider";
import { PetButton } from "../../components/welcome-popup";

type Props = {
  userInfo: { count: number };
  username: string;
  handleUserName: (e: any) => void;
  handleSubmit: () => void;
};

// const PetButton = styled(Box)(() => ({
//   background: `url(${ButtonBackground})`,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   width: 110,
//   height: 50,
//   marginTop: 8,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   ":hover": {
//     transform: "scale(1.1)",
//   },
//   ":active": {
//     animation: "vibrate 0.1s linear infinite",
//   },
//   "@keyframes vibrate": {
//     "0%": { transform: "translate(0)" },
//     "25%": { transform: "translate(-2px, 2px)" },
//     "50%": { transform: "translate(0)" },
//     "75%": { transform: "translate(2px, -2px)" },
//     "100%": { transform: "translate(0)" },
//   },
// }));

const MainSection = ({
  userInfo,
  username,
  handleUserName,
  handleSubmit,
}: Props) => {
  const pets = [
    [Pet1, Pet1Icon],
    [Pet2, Pet2Icon],
    [Pet3, Pet3Icon],
    [Pet4, Pet4Icon],
    [Pet5, Pet5Icon],
    [Pet6, Pet6Icon],
    [Pet7, Pet7Icon],
    [Pet8, Pet8Icon],
    [Pet9, Pet9Icon],
    [Pet10, Pet10Icon],
  ];
  const [currentPet, setCurrentPet] = useState<string>(pets[0][0]);
  const [currentPetIcon, setCurrentPetIcon] = useState<string>(pets[0][1]);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);
  const [petStats, setPetStats] = useState<number>(0);
  const [isVibrating, setIsVibrating] = useState(false);
  const handlePetClick = () => {
    setIsVibrating(true);
    if (localStorage.getItem("username")) {
      updateCountMutation.mutate(localStorage.getItem("username") || "");
      refetch();
    }
    // handlePetClick(); // Your existing click handler

    // Reset the animation
    // console.log("pet", petStats);
    setPetStats((pet) => pet + 1);
    const randomIndex = Math.floor(Math.random() * pets.length);
    setCurrentPet(pets[randomIndex][0]);
    setCurrentPetIcon(pets[randomIndex][1]);
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
    }, 2000); // Fireworks will show for 1 second
    setTimeout(() => {
      setIsVibrating(false);
    }, 800); // Reset after the animation duration
  };

  const vibrationEffect = {
    scale: [1, 0.9, 1.1, 1], // Quickly change scale to simulate a shake
    rotate: [0, -2, 2, 0], // Slight rotations
    transition: {
      duration: 0.2, // Short duration for a quick shake
      repeat: 1, // Repeat the sequence for a continuous effect
      repeatType: "reverse", // Reverse the animation each cycle
    },
  };

  const { data, refetch } = useQuery<UserResponse>({
    queryKey: ["getUserInfo"],
    queryFn: () =>
      axios
        .get(`${BACKEND_URI}${API_ENDPOINT.GET_INFO}`)
        .then((res) => res.data),
  });
  // const { data: userInfo } = useQuery({
  //   queryKey: ["getUser"],
  //   queryFn: () =>
  //     axios
  //       .post(`${BACKEND_URI}${API_ENDPOINT.GET_USER}`, {
  //         username: localStorage.getItem("username"),
  //       })
  //       .then((res) => res.data),
  // });

  useEffect(() => {
    if (userInfo) {
      setPetStats(userInfo.count || 0);
    }
  }, [userInfo]);

  const updateCountMutation = useMutation({
    mutationFn: (username: string) => {
      return axios.post(`${BACKEND_URI}${API_ENDPOINT.UPDATE_COUNT}`, {
        username,
      });
    },
  });

  // const cardVariants = {
  //   offscreen: {
  //     x: 300,
  //     opacity: 1,
  //   },
  //   onscreen: {
  //     scale: [1, 0.9, 1.1, 1], // Quickly change scale to simulate a shake
  //     rotate: [0, -2, 2, 0], // Slight rotations
  //     transition: {
  //       duration: 0.2, // Short duration for a quick shake
  //       repeat: 1, // Repeat the sequence for a continuous effect
  //       repeatType: "reverse", // Reverse the animation each cycle
  //       // scale: [1, 0.9, 1.1, 1], // Quickly change scale to simulate a shake
  //       // rotate: [0, -2, 2, 0], // Slight rotations
  //     },
  //   },
  // };
  return (
    <>
      <div className="main-section">{/* <SnowEffect /> */}</div>
      <div style={{ position: "relative", height: "100vh" }}></div>
      <div style={{ position: "relative", background: "#7a5946" }}>
        {showFireworks && <SnowEffect pet={currentPetIcon} />}
        <AnimateDivider />
        <Grid container justifyContent={"center"} mt={4}>
          <Grid item>
            <Typography variant="h2">Petting</Typography>
          </Grid>
        </Grid>

        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            background: "transparent",
            boxShadow: "none",
          }}
        >
          {/* <ButtonWithSprinkles /> */}
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            {/* <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.1 }}
            > */}
            <motion.img
              drag
              dragConstraints={{
                top: -10,
                left: 100,
                right: 100,
                bottom: 10,
              }}
              // variants={cardVariants as any}
              // whileTap={vibrationEffect}
              animate={isVibrating ? (vibrationEffect as any) : {}}
              onClick={handlePetClick}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ cursor: "grab" }}
              src={currentPet}
              style={{
                borderRadius: "50%",
                cursor: "pointer",
                border: "10px solid #36180D",
                background:
                  "linear-gradient(90deg, rgba(145,78,249,1) 0%, rgba(80,163,197,1) 53%, rgba(21,240,148,1) 100%)",
              }}
              alt="Pet"
              width={300}
              height={300}
            />
            {/* </motion.div> */}
            {/* <PetButton onClick={handlePetClick}>
            <Typography variant="h5">Pet</Typography>
          </PetButton> */}
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
          >
            {localStorage.getItem("username") ? (
              <Typography variant="h3">
                {" "}
                Welcome {localStorage.getItem("username")}
              </Typography>
            ) : (
              <>
                <input
                  className="username"
                  placeholder="Username"
                  aria-label="username"
                  style={{ zIndex: 1000 }}
                  value={username}
                  onChange={(e: any) => handleUserName(e.target.value)}
                />
                <PetButton onClick={handleSubmit}>Submit</PetButton>
              </>
            )}
          </Grid>
          <CardActions>
            <Grid container flexDirection={"column"}>
              <Typography variant="h4" mt={2}>
                Total Pets: {petStats}
              </Typography>
              <Typography variant="h4">
                Average Pets Per User:
                {data?.average_count.average_count?.toFixed(2) || 0}
                {/* {(petStats.totalPets / petStats.totalUsers.size).toFixed(2)} */}
              </Typography>
              <Typography variant="h5" mt={1}>
                Top Petter: {data?.best_counter.username}
              </Typography>
            </Grid>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default MainSection;
