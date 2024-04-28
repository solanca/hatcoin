import { Box, styled } from "@mui/material";
import DividerItem from "./DividerItem";
import Pet1 from "../../assets/img/pet1.png";
import Pet2 from "../../assets/img/pet2.png";
import Pet3 from "../../assets/img/pet3.png";
import Pet4 from "../../assets/img/pet4.png";
import Pet5 from "../../assets/img/pet5.png";
import Pet6 from "../../assets/img/pet6.png";
import Pet7 from "../../assets/img/pet7.png";
import Pet8 from "../../assets/img/pet8.png";
import Pet9 from "../../assets/img/pet9.png";

type Props = {};
const Root = styled(Box)(() => ({
  borderTop: "4px solid black",
  borderBottom: "4px solid black",
  width: "100vw",
  overflow: "hidden",
  background: "#000B33",
  //   color: "#363544",
  //   font-size: 32px;
  //   padding: 12px 0
}));

const AnimateDivider = (_props: Props) => {
  return (
    <Root className="marque">
      <div>
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet1} />
        <DividerItem url={Pet2} />
        <DividerItem url={Pet3} />
        <DividerItem url={Pet4} />
        <DividerItem url={Pet5} />
        <DividerItem url={Pet6} />
        <DividerItem url={Pet7} />
        <DividerItem url={Pet8} />
        <DividerItem url={Pet9} />
        <DividerItem url={Pet1} />
      </div>
    </Root>
  );
};

export default AnimateDivider;
