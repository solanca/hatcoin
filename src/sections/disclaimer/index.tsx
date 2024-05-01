import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";
import Pet2 from "../../assets/img/pet2.png";

type Props = {};

const Disclaimer = (_props: Props) => {
  return (
    <SectionTemplate position={false}>
      <Box sx={{ height: 300 }}>

        <Typography variant="h4">Disclaimer</Typography>

        <img src={Pet2} width={200} alt="pet2" />
      </Box>
    </SectionTemplate>
  );
};

export default Disclaimer;
