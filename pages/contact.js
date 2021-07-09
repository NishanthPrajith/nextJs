import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div className = {styles.container}>
            <div className = {styles.info}>
                <div className = {styles.text}>
                    <p className = {styles.title}>Let&apos;s get in Touch</p>
                    <div>
                        <p className = {styles.one}>I am currently available for work</p>
                        <p className = {styles.two}>nishanth.prajith@gmail.com</p>
                    </div>
                </div>
                <div className = {styles.media}>
                    <h3>Signature</h3>
                    <p>
                        42 -49 Colden St,<br></br>
                        Flushing, NY, 11355
                    </p>
                    
                </div>
            </div>
        </div>
    );
}