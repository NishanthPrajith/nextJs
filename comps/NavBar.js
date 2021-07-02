import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const NavBar = () => {
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
                        <li data-aos = "fade-down" data-aos-delay = "100">
                            <Link href = '/'>
                                Home
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "200">
                            <Link href = '/about'>
                                About
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "300">
                            <Link href = '/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li data-aos = "fade-down" data-aos-delay = "400">
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