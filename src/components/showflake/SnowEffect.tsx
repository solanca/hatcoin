import Snowflake from ".";

const SnowEffect = ({ count = 50, pet }: any) => {
  const createSnowflakes = () => {
    return Array.from({ length: count }).map((_, index) => {
      let size = Math.random() * 50 + 10;
      const style = {
        position: "absolute",

        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        backgroundColor: "white",

        color: "white",
        left: `${Math.random() * 100}%`,
        zIndex: 1000,
      };

      const duration = Math.random() * 5;
      const delay = Math.random() * -20;
      const rotate = Math.random() * 180;
      return (
        <Snowflake
          pet={pet}
          key={index}
          style={style}
          duration={duration}
          delay={delay}
          rotate={rotate}
        />
      );
    });
  };

  return <div>{createSnowflakes()}</div>;
};

export default SnowEffect;
