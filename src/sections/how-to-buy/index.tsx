import SectionTemplate from "../../components/section-template";
import { Box, Grid, Typography, styled } from "@mui/material";
import Meme1 from "../../assets/img/meme (8).png";
import Meme2 from "../../assets/img/meme (16).png";
import Meme3 from "../../assets/img/meme (12).png";
import Meme4 from "../../assets/img/meme (18).png";
import { useState } from "react";

type Props = {};
const StepButton = styled(Box)(
  //@ts-ignore
  ({ theme, step, currentStep }: { step: number; currentStep: number }) => ({
    width: 100,
    height: 60,
    cursor: "pointer",
    background: step === currentStep ? "#A87463" : "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px 8px 0px 0px",
    [theme.breakpoints.down("sm")]: {
      width: 70,
      height: 50,
    },
  })
);

const HowToBuy = (_props: Props) => {
  const [step, setStep] = useState<number>(0);

  return (
    <SectionTemplate position={false}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h2">How to buy / CA</Typography>
      </Grid>
      <Grid container justifyContent={"center"} mt={12} mb={8}>
        <Box
          width={{ md: 1000, sm: "80%", xs: "90%" }}
          sx={{
            background: "#A87463",
            position: "relative",
            borderRadius: "0px 12px 12px 12px",
            boxShadow: "39px 14px 72px -17px rgba(82,65,51,1);",
          }}
        >
          <Grid
            container
            sx={{
              position: "absolute",
              top: { md: -60, sm: -55, xs: -45 },
              left: 0,
            }}
          >
            <StepButton step={0} currentStep={step} onClick={() => setStep(0)}>
              <Typography variant={"h6"}>Step 1</Typography>
            </StepButton>
            <StepButton step={1} currentStep={step} onClick={() => setStep(1)}>
              <Typography variant="h6">Step 2</Typography>
            </StepButton>
            <StepButton step={2} currentStep={step} onClick={() => setStep(2)}>
              <Typography variant="h6">Step 3</Typography>
            </StepButton>
            <StepButton step={3} currentStep={step} onClick={() => setStep(3)}>
              <Typography variant="h6">Step 4</Typography>
            </StepButton>
          </Grid>
          <Grid container p={{ md: 4, sm: 4, xs: 4 }} spacing={4}>
            {step === 0 && (
              <>
                <Grid item md={5} sm={12}>
                  <img
                    src={Meme1}
                    alt="wallet"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 8 }}
                  />
                </Grid>
                <Grid item md={7} sm={12} px={{ md: 4, sm: 3, xs: 1 }}>
                  <Typography>
                    Navigate to the 'Settings' option within your wallet and
                    locate the networks section.
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                    details for Base: Network Name: Base RPC Endpoint:
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                  </Typography>
                  <Typography>
                    https://mainnet.base.org/ Chain ID: 8453 Currency Symbol:
                    ETH Block Explorer: https://basescan.org Click on 'CONNECT
                    TO BASE' after
                  </Typography>
                  <Typography>
                    saving the information. Upon completion, you can connect to
                    Base by choosing it from the network selection menu.
                  </Typography>
                </Grid>
              </>
            )}
            {step === 1 && (
              <>
                <Grid item md={5} sm={12}>
                  <img
                    src={Meme2}
                    alt="wallet"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 8 }}
                  />
                </Grid>
                <Grid item md={7} sm={12} px={{ md: 4, sm: 3, xs: 1 }}>
                  <Typography>
                    Navigate to the 'Settings' option within your wallet and
                    locate the networks section.
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                    details for Base: Network Name: Base RPC Endpoint:
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                  </Typography>
                  <Typography>
                    https://mainnet.base.org/ Chain ID: 8453 Currency Symbol:
                    ETH Block Explorer: https://basescan.org Click on 'CONNECT
                    TO BASE' after
                  </Typography>
                  <Typography>
                    saving the information. Upon completion, you can connect to
                    Base by choosing it from the network selection menu.
                  </Typography>
                </Grid>
              </>
            )}
            {step === 2 && (
              <>
                <Grid item md={5} sm={12}>
                  <img
                    src={Meme3}
                    alt="wallet"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 8 }}
                  />
                </Grid>
                <Grid item md={7} sm={12} px={{ md: 4, sm: 3, xs: 1 }}>
                  <Typography>
                    Navigate to the 'Settings' option within your wallet and
                    locate the networks section.
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                    details for Base: Network Name: Base RPC Endpoint:
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                  </Typography>
                  <Typography>
                    https://mainnet.base.org/ Chain ID: 8453 Currency Symbol:
                    ETH Block Explorer: https://basescan.org Click on 'CONNECT
                    TO BASE' after
                  </Typography>
                  <Typography>
                    saving the information. Upon completion, you can connect to
                    Base by choosing it from the network selection menu.
                  </Typography>
                </Grid>
              </>
            )}
            {step === 3 && (
              <>
                <Grid item md={5} sm={12}>
                  <img
                    src={Meme4}
                    alt="wallet"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 8 }}
                  />
                </Grid>
                <Grid item md={7} sm={12} px={{ md: 4, sm: 3, xs: 1 }}>
                  <Typography>
                    Navigate to the 'Settings' option within your wallet and
                    locate the networks section.
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                    details for Base: Network Name: Base RPC Endpoint:
                  </Typography>
                  <Typography>
                    Manually include a new network, and input the following
                  </Typography>
                  <Typography>
                    https://mainnet.base.org/ Chain ID: 8453 Currency Symbol:
                    ETH Block Explorer: https://basescan.org Click on 'CONNECT
                    TO BASE' after
                  </Typography>
                  <Typography>
                    saving the information. Upon completion, you can connect to
                    Base by choosing it from the network selection menu.
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Grid>
    </SectionTemplate>
  );
};

export default HowToBuy;
