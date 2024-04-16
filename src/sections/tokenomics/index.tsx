import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";
import Pet4 from "../../assets/img/pet4.png";

type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <SectionTemplate position={true}>
      <Box sx={{ height: 300 }}>
        <Typography variant="h4">Tokenomics</Typography>
        <img src={Pet4} width={200} alt="pet4" />
      </Box>
    </SectionTemplate>
  );
};

export default Tokenomics;
