import { NavLink } from "react-router";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  HOME_PAGE,
  SOCIAL_PAGE,
} from "../../../constants/constants";

const HeaderNavigation = () => {
  return (
    <nav>
      <NavLink to={HOME_PAGE} end>
        {HOME_PAGE}
      </NavLink>
      <NavLink to={SOCIAL_PAGE} end>
        {SOCIAL_PAGE}
      </NavLink>
      <NavLink to={CERTIFICATES_PAGE} end>
        {CERTIFICATES_PAGE}
      </NavLink>
      <NavLink to={BLOG_PAGE} end>
        {BLOG_PAGE}
      </NavLink>
    </nav>
  );
};

export default HeaderNavigation;
