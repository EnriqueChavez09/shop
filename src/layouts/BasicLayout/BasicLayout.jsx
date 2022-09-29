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
          <section>{children}</section>
          <footer>
            <FooterMobile />
            <FooterDesktop />
          </footer>
        </div>
      );
}
