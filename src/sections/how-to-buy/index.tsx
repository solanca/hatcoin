import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";
import Pet3 from "../../assets/img/pet3.png";

type Props = {};

const HowToBuy = (_props: Props) => {
  return (
    <SectionTemplate position={false}>
      <Box sx={{ height: 300 }}>
        <Typography variant="h4">How to buy / CA</Typography>
        <img src={Pet3} width={200} alt="pet2" />
      </Box>
    </SectionTemplate>
  );
};

export default HowToBuy;
