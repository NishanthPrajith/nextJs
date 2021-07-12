import Footer from "./Footer"
import NavBar from "./NavBar"
import styles from '../styles/Landing.module.css'

const Layout = ({ children }) => {
    return (
        <div className = "content">
            <div className = {styles.landing}>
                <div className = {styles.loadText}>
                    <p>welcome</p>
                </div>
                <div className = {styles.loader}></div>
            </div>
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;

