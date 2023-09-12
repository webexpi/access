import Link from 'next/link';
import style from './NavLink.module.css';

export const NavLink = ({ text, link, currentpage, handleClick }) => (
    <li
      className={
        `${style.navItem} ${link == currentpage ? style.navItemActive : ""}`
      }
      onClick={handleClick}
    >
      <Link href={ link }>{ text }</Link>
    </li>
);