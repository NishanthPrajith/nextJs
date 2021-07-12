import styles from '../styles/Landing.module.css'

export default function About() {
    return (
        <div className = {styles.landing}>
            <div className = {styles.loadText}>
                <p>welcome</p>
            </div>
            <div className = {styles.loader}></div>
        </div>
    );
}