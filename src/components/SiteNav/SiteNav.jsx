import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

export default function SiteNav() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "Dad Jokes", url: "/dadjokes" },
        { label: "Tic Tac Toe", url: "/tictactoe"},
    ];
    return (
        <div className={styles.wrapper}>
            {navLinks.map((navLink) => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.navItem}>
                <NavLink
                    key={navLink.url}
                    to={navLink.url}
                    className={({ isActive }) => {
                        isActive ? styles.activeLink : styles.inactiveLink;
                    }}
                >
                    {navLink.label}
                </NavLink>
                </div>
            ))}
        </div>
    );
}
