import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";
import Pet1 from "../../assets/img/pet1.png";
type Props = {};

const About = (_props: Props) => {
  return (
    <SectionTemplate position={true}>
      <Box sx={{ height: 400, p: 6 }}>
        <Typography variant="h4">About</Typography>
        <img src={Pet1} width={200} alt="pet1" />
      </Box>
    </SectionTemplate>
  );
};

export default About;
