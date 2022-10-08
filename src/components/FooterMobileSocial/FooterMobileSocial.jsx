import { IconContext } from "react-icons";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const FooterMobileSocial = () => {
  return (
    <div className="footerMobileSocial">
      <IconContext.Provider
        value={{
          size: "30px",
          color: "#949494",
        }}
      >
        <div className="footerMobileSocial__icon">
          <a href="https://www.facebook.com/dev3ch">
            <AiFillFacebook />
          </a>
        </div>
        <div className="footerMobileSocial__icon">
          <a href="https://www.instagram.com/dev3ch">
            <AiFillInstagram />
          </a>
        </div>
        <div className="footerMobileSocial__icon">
          <a href="https://www.linkedin.com/dev3ch">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="footerMobileSocial__icon">
          <a href="https://www.twitter.com/dev3ch">
            <AiFillTwitterSquare />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};
