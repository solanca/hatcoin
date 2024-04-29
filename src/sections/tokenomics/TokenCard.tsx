import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

type Props = {
  url: string;
  title: string;
};

const TokenCard = ({ url, title }: Props) => {
  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        borderRadius: "50%",
        width: "100%",
      }}
    >
      <CardMedia component={"img"} src={url} height={400} />
      <CardActionArea>
        <div className="contract">
          <Typography ml={2} variant="h5">
            {title}
          </Typography>
          {/* <Box style={{ display: "flex" }} mr={2}>
          <Typography>Camd...eor</Typography>
          
        </Box> */}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default TokenCard;
