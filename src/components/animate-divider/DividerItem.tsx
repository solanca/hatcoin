import { Grid, Typography } from "@mui/material";

type Props = {
  url: string;
};

const DividerItem = ({ url }: Props) => {
  return (
    // <div style={{ display: "block" }}>
    <Grid container>
      <img src={url} alt="hat" width={50} />
      <Typography fontWeight={900} variant="h5">
        $HAT
      </Typography>
    </Grid>
    // </div>
  );
};

export default DividerItem;
