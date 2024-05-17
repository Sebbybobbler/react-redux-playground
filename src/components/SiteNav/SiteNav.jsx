import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

export default function SiteNav() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "Dad Jokes", url: "/dadjokes" },
    ];
    return (
        <div>
            {navLinks.map((navLink) => (
                <NavLink
                    key={navLink.url}
                    to={navLink.url}
                    className={({ isActive }) => {
                        isActive ? styles.activeLink : styles.inactiveLink;
                    }}
                >
                    {navLink.label}
                </NavLink>
            ))}
        </div>
    );
}
