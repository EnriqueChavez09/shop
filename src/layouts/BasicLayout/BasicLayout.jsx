import {
  FooterDesktop,
  FooterMobile,
  HeaderDesktop,
  HeaderMobile,
} from "../../containers";

export const BasicLayout = ({children}) => {
    return (
        <div className="basicLayout">
          <header>
            <HeaderDesktop />
            <HeaderMobile />
          </header>
          {children}
          <footer>
            <FooterMobile />
            <FooterDesktop />
          </footer>
        </div>
      );
}
