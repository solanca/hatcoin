import { AnimationProps, motion } from "framer-motion";

const Snowflake = ({ style, duration, delay, pet, rotate }: any) => {
  const animation: AnimationProps = {
    initial: { y: -600, opacity: 1 },
    animate: {
      y: [null, window.innerHeight + 200],
      opacity: 1,
      rotate: rotate,
    },
    transition: { duration, delay, ease: "linear", repeat: 2 },
  };

  return (
    <motion.div style={style} {...animation}>
      <img src={pet} alt="Firework" width="100%" height="100%" />
    </motion.div>
  );
};

export default Snowflake;
