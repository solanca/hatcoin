import {
  Box,
  Card,
  CardActions,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

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
import ButtonBackground from "../../assets/button.webp";
import SnowEffect from "../../components/showflake/SnowEffect";

type Props = {};
interface PetStats {
  totalPets: number;
  totalUsers: Set<string>;
}

const PetButton = styled(Box)(() => ({
  background: `url(${ButtonBackground})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: 110,
  height: 50,
  marginTop: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
  },
  ":active": {
    animation: "vibrate 0.1s linear infinite",
  },
  "@keyframes vibrate": {
    "0%": { transform: "translate(0)" },
    "25%": { transform: "translate(-2px, 2px)" },
    "50%": { transform: "translate(0)" },
    "75%": { transform: "translate(2px, -2px)" },
    "100%": { transform: "translate(0)" },
  },
}));

const MainSection = (_props: Props) => {
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
  const [petStats, setPetStats] = useState<PetStats>({
    totalPets: 0,
    totalUsers: new Set(),
  });
  const [isVibrating, setIsVibrating] = useState(false);
  const handlePetClick = () => {
    setIsVibrating(true);
    // handlePetClick(); // Your existing click handler

    // Reset the animation
    setPetStats((prevStats) => {
      const newStats = { ...prevStats };
      newStats.totalPets++;
      newStats.totalUsers.add("user1"); // Simulating a user ID, replace with real user tracking logic
      return newStats;
    });
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

  return (
    <div className="main-section">
      {showFireworks && <SnowEffect pet={currentPetIcon} />}

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
          <motion.img
            // whileTap={vibrationEffect}
            animate={isVibrating ? (vibrationEffect as any) : {}}
            onClick={handlePetClick}
            src={currentPet}
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              background:
                "linear-gradient(90deg, rgba(145,78,249,1) 0%, rgba(80,163,197,1) 53%, rgba(21,240,148,1) 100%)",
            }}
            alt="Pet"
            width={300}
            height={300}
          />
          <PetButton onClick={handlePetClick}>
            <Typography variant="h5">Pet</Typography>
          </PetButton>
        </Grid>
        {/* {showFireworks && (
          <>
            <Firework
              pet={currentPetIcon}
              startX={-200}
              startY={-300}
              color="red"
            />
            <Firework
              pet={currentPetIcon}
              startX={150}
              startY={-200}
              color="green"
            />
            <Firework
              pet={currentPetIcon}
              startX={260}
              startY={-100}
              color="white"
            />
            <Firework
              pet={currentPetIcon}
              startX={470}
              startY={-350}
              color="blue"
            />
            <Firework
              pet={currentPetIcon}
              startX={750}
              startY={-320}
              color="yellow"
            />
          </>
        )} */}
        <CardActions>
          <Grid container flexDirection={"column"}>
            <Typography color={"azure"} variant="h3">
              Total Pets: {petStats.totalPets}
            </Typography>
            <Typography variant="h3" color={"azure"}>
              Average Pets Per User:{" "}
              {(petStats.totalPets / petStats.totalUsers.size).toFixed(2)}
            </Typography>
            <Typography color={"azure"} variant="h5">
              Top Petter: @skips
            </Typography>
          </Grid>
        </CardActions>
      </Card>
      {/* <SnowEffect /> */}
    </div>
  );
};

export default MainSection;
