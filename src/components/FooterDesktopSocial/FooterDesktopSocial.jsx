import { IconContext } from "react-icons";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const FooterDesktopSocial = () => {
  return (
    <div className="footerDesktopSocial">
      <IconContext.Provider
        value={{
          size: "30px",
          color: "#949494",
        }}
      >
        <div className="footerDesktopSocial__icon">
          <a href="https://www.facebook.com/dev3ch">
            <AiFillFacebook />
            <p>facebook.com/dev3ch</p>
          </a>
        </div>
        <div className="footerDesktopSocial__icon">
          <a href="https://www.instagram.com/dev3ch">
            <AiFillInstagram />
            <p>instagram.com/dev3ch</p>
          </a>
        </div>
        <div className="footerDesktopSocial__icon">
          <a href="https://www.linkedin.com/dev3ch">
            <AiFillLinkedin />
            <p>linkedin.com/dev3ch</p>
          </a>
        </div>
        <div className="footerDesktopSocial__icon">
          <a href="https://www.twitter.com/dev3ch">
            <AiFillTwitterSquare />
            <p>twitter.com/dev3ch</p>
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};
