import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();

    return (
        <nav>
            <div className = {styles.FirstBox} data-aos = "fade-down">
                <p>
                    <Link href = '/'>
                        np.
                    </Link>
                </p>
            </div>
            <div className = {styles.SecondBox}>
                <div>
                    <ul>
                        <li data-aos = "fade-down" data-aos-delay = "100" className={
                                router.pathname === "/"
                                ? styles.strike
                                : null
                            }>
                            <Link href = '/'>
                                Home
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "200" className={
                                router.pathname === "/about"
                                ? styles.strike
                                : null
                            }>
                            <Link href = '/about'>
                                About
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "300" className={
                                router.pathname === "/portfolio"
                                ? styles.strike
                                : null
                            }>
                            <Link href = '/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "400" className={
                                router.pathname === "/contact"
                                ? styles.strike
                                : null
                            }>
                            <Link href = '/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;