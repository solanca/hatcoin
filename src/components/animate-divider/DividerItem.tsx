import { Grid, Typography } from "@mui/material";

type Props = {
  url: string;
};

const DividerItem = ({ url }: Props) => {
  return (
    <Grid container>
      <img src={url} alt="hat" width={60} />
      <Typography color={"azure"} fontWeight={900} variant="h5">
        $HAT
      </Typography>
    </Grid>
  );
};

export default DividerItem;
