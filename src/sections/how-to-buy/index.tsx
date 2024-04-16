import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";

type Props = {};

const HowToBuy = (_props: Props) => {
  return (
    <SectionTemplate position={false}>
      <Box sx={{ height: 300 }}>
        <Typography variant="h4">How to buy / CA</Typography>
      </Box>
    </SectionTemplate>
  );
};

export default HowToBuy;
