import SectionTemplate from "../../components/section-template";
import { Box, Typography } from "@mui/material";

type Props = {};

const About = (_props: Props) => {
  return (
    <SectionTemplate position={true}>
      <Box sx={{ height: 400, p: 6 }}>
        <Typography variant="h4">About</Typography>
      </Box>
    </SectionTemplate>
  );
};

export default About;
