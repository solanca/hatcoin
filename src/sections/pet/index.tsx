import React, { useState } from "react";

interface PetStats {
  totalPets: number;
  totalUsers: Set<string>;
}

const PetCounter: React.FC = () => {
  const [petStats, setPetStats] = useState<PetStats>({
    totalPets: 0,
    totalUsers: new Set(),
  });

  const handlePet = () => {
    setPetStats((prevStats) => {
      const newStats = { ...prevStats };
      newStats.totalPets++;
      newStats.totalUsers.add("user1"); // Simulating a user ID, replace with real user tracking logic
      return newStats;
    });
  };

  return (
    <div>
      <button onClick={handlePet}>Pet!</button>
      <div>Total Pets: {petStats.totalPets}</div>
      <div>
        Average Pets Per User:{" "}
        {(petStats.totalPets / petStats.totalUsers.size).toFixed(2)}
      </div>
    </div>
  );
};

export default PetCounter;
