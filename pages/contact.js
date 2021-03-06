import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div className = {styles.container}>
            <div>
                <p className = {styles.title}>Contact me</p>
                <h1 className = {styles.email}>
                    <a href = "mailto: nishanth.prajith@gmail.com">
                        nishanth.prajith@gmail.com
                    </a>
                </h1>
            </div>
        </div>
    );
}