import SectionTemplate from "../../components/section-template";
import { Box } from "@mui/material";
import Pet1 from "../../assets/img/pet1.png";
import About1 from "../../assets/about1.webp";
type Props = {};

const About = (_props: Props) => {
  return (
    <>
      <SectionTemplate position={true}>
        <Box
          sx={{
            height: 400,
            py: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Typography variant="h4">About</Typography> */}
          <img src={About1} alt="about" width={300} />
          <img src={Pet1} width={200} alt="pet1" />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default About;
