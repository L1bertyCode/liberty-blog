import { classNames } from "7shared/lib/classNames/classNames";
import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";
import s from "./Navbar.module.scss";
interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>Logo</div>
      <div className={s.links}>
        <AppNavLink to="/" className={s.link}>
          MainPage
        </AppNavLink>
        <AppNavLink to="/about" className={s.link}>
          AboutPage
        </AppNavLink>
      </div>
    </div>
  );
};
