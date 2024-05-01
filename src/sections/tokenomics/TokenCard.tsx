import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  url: string;
  title: string;
};

const TokenCard = ({ url, title }: Props) => {
  const cardVariants = () => ({
    offscreen: {
      y: 400,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  });
  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        borderRadius: "50%",
        width: "100%",
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={cardVariants()} style={{ overflowY: "hidden" }}>
          <CardMedia component={"img"} src={url} height={400} />
        </motion.div>
      </motion.div>
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
