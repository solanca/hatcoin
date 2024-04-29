import SectionTemplate from "../../components/section-template";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";
import diagram from "../../assets/diagram.svg";
import Pet8 from "../../assets/img/pet8.png";
import copy from "../../assets/copy.svg";
type Props = {};

const Tokenomics = (_props: Props) => {
  // const theme = useTheme();
  // const _isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <SectionTemplate position={true}>
        <Typography variant="h4">TOKENOMICS</Typography>
        <Grid container justifyContent={"center"}>
          <div className="total">
            <Typography>
              TOTAL SUPPLY: <span>1000,000,000,000</span>
            </Typography>
          </div>
        </Grid>
        <Grid container my={4} alignItems={"center"} spacing={4}>
          <Grid item md={6} sm={12}>
            <Grid container justifyContent={"center"}>
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardMedia component={"img"} src={Pet8} height={400} />
                {/* <CardActionArea> */}
                <div className="contract">
                  <Typography ml={2}>CONTRACT</Typography>
                  <Box style={{ display: "flex" }} mr={2}>
                    <Typography>Camd...eor</Typography>
                    <img
                      src={copy}
                      alt="copy"
                      style={{ cursor: "pointer", marginLeft: "12px" }}
                    />
                  </Box>
                </div>
                {/* </CardActionArea> */}
              </Card>
              {/* <Box
                sx={{
                  position: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              > */}
              {/* <img
                src={Pet8}
                alt="pet"
                // style={{ width: "fit-content" }}
                width={400}
              /> */}
              {/* </Box> */}
            </Grid>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid container justifyContent={"center"}>
              <img src={diagram} alt="diagram" width={"50%"} />
            </Grid>
          </Grid>
        </Grid>
      </SectionTemplate>
    </>
  );
};

export default Tokenomics;
