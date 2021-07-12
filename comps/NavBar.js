import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();

    return (
        <nav>
            <div className = {styles.navMain}>
                <div className = {styles.FirstBox} data-aos = "fade-down">
                    <p>
                        <Link href = '/'>
                            np.
                        </Link>
                    </p>
                </div>
                <div className = {router.pathname === "/about"
                    ? styles.changeTwo
                    : styles.changeOne
                } style = {router.pathname === "/about"
                                ? {color: "#ffffff"}
                                : {}}>
                    <div>
                        <ul>
                            <li data-aos = "fade-down" data-aos-delay = "100" className={
                                    router.pathname === "/"
                                    ? styles.strikeOne
                                    : null
                                }>
                                <Link href = '/'>
                                    Home
                                </Link>
                            </li>
                            <li data-aos = "fade-down" data-aos-delay = "200" className={
                                    router.pathname === "/about"
                                    ? styles.strikeTwo
                                    : null
                                }>
                                <Link href = '/about'>
                                    About
                                </Link>
                            </li>
                            <li data-aos = "fade-down" data-aos-delay = "300" className={
                                    router.pathname === "/portfolio"
                                    ? styles.strikeOne
                                    : null
                                }>
                                <Link href = '/portfolio'>
                                    Portfolio
                                </Link>
                            </li>
                            <li data-aos = "fade-down" data-aos-delay = "400" className={
                                    router.pathname === "/contact"
                                    ? styles.strikeOne
                                    : null
                                }>
                                <Link href = '/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;