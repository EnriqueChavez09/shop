import { IconContext } from "react-icons";
import { AiOutlineUser } from "react-icons/ai";
export const AccountWidget = ({ size }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#ef5d5d", size: size }}>
        <AiOutlineUser />
      </IconContext.Provider>
    </>
  );
};
