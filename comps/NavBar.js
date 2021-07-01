import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <div className = {styles.FirstBox}>
                <p>
                    <Link href = '/'>
                        np.
                    </Link>
                </p>
            </div>
            <div className = {styles.SecondBox}>
                <div>
                    <ul>
                        <li>
                            <Link href = '/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href = '/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href = '/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
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