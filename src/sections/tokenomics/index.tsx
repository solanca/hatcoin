import {
  Grid,
  Typography,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";
import Pet8 from "../../assets/img/pet8.png";
import Pet4 from "../../assets/img/pet2.png";
import Pet5 from "../../assets/img/pet5.png";
import Pet6 from "../../assets/img/pet6.png";
import TokenCard from "./TokenCard";
type Props = {};

const Tokenomics = (_props: Props) => {
  // const theme = useTheme();
  // const _isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* <SectionTemplate position={true}> */}
      <Typography variant="h2">TOKENOMICS</Typography>
      {/* <Grid container justifyContent={"center"}>
          <div className="total">
            <Typography>
              TOTAL SUPPLY: <span>1000,000,000,000</span>
            </Typography>
          </div>
        </Grid> */}
      <Grid container my={4} alignItems={"center"} spacing={6} px={4}>
        <Grid item md={3} sm={6} xs={12}>
          <TokenCard url={Pet8} title="TOTAL SUPPLY: 1T" />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <TokenCard url={Pet4} title="LP: BURNED" />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <TokenCard url={Pet5} title="MINT REVOKED" />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <TokenCard url={Pet6} title="TAXES:0" />
        </Grid>
      </Grid>
      {/* </SectionTemplate> */}
    </>
  );
};

export default Tokenomics;
