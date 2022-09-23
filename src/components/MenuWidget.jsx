import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
export const MenuWidget = ({ size }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#ef5d5d", size: size }}>
        <AiOutlineMenu />
      </IconContext.Provider>
    </>
  );
};
