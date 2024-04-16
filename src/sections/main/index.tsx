import { Card } from "@mui/material";
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
import Firework from "../../components/firework";

type Props = {};

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

  const handlePetClick = () => {
    const randomIndex = Math.floor(Math.random() * pets.length);
    setCurrentPet(pets[randomIndex][0]);
    setCurrentPetIcon(pets[randomIndex][1]);
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
    }, 1000); // Fireworks will show for 1 second
  };

  return (
    <div className="main-section">
      <Card
        sx={{ borderRadius: "50%", cursor: "pointer" }}
        onClick={handlePetClick}
      >
        <img src={currentPet} alt="Pet" width={300} height={300} />
        {showFireworks && (
          <>
            <Firework
              pet={currentPetIcon}
              startX={100}
              startY={-300}
              color="red"
            />
            <Firework
              pet={currentPetIcon}
              startX={50}
              startY={-200}
              color="green"
            />
            <Firework
              pet={currentPetIcon}
              startX={160}
              startY={-100}
              color="white"
            />
            <Firework
              pet={currentPetIcon}
              startX={200}
              startY={-350}
              color="blue"
            />
            <Firework
              pet={currentPetIcon}
              startX={150}
              startY={-320}
              color="yellow"
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default MainSection;
