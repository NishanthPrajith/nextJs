import styles from '../styles/Portfolio.module.css'
import Head from 'next/head'
import Image from 'next/image'
import first from '../images/first.png'
import second from '../images/second.png'
import three from '../images/three.png'
import four from '../images/fourOne.png'
import five from '../images/five.png'

export default function Portfolio() {
    return (
        <div className= {styles.container}>
            <Head>
                <title>Nishanth Prajith</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
            </Head>
            <div className = {styles.main}>
                <div className = {styles.horizontal}>
                    <div className = {styles.info}>
                        <div>
                            <p className = {styles.title} data-aos = "fade-up">MY PROJECTS.</p>
                            <p className = {styles.subtitle} data-aos = "fade-up">Scroll Left <span styles = {{marginLeft: "20%"}}>&#62;</span> </p> 
                        </div>
                    </div>
                    <div className = {styles.child}>
                        <div className = {styles.image} data-aos = "fade-left">
                            <Image src = {first}/>
                        </div>
                        <div className = {styles.projectinfo} data-aos = "fade-up">
                            <h1>01</h1>
                            <p>UI with Google Maps</p>
                            <div className = {styles.languages}>
                                <i className ="devicon-flutter-plain"></i>
                                <i className ="devicon-dart-plain"></i>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.child}>
                        <div className = {styles.image} data-aos = "fade-left">
                            <Image src = {second}/>
                        </div>
                        <div className = {styles.projectinfo} data-aos = "fade-up">
                            <h1>02</h1>
                            <p>Music app UI</p>
                            <div className = {styles.languages}>
                                <i className ="devicon-flutter-plain"></i>
                                <i className ="devicon-dart-plain"></i>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.child}>
                        <div className = {styles.image} data-aos = "fade-left">
                            <Image src = {three}/>
                        </div>
                        <div className = {styles.projectinfo} data-aos = "fade-up">
                            <h1>03</h1>
                            <p>Food app UI</p>
                            <div className = {styles.languages}>
                                <i className ="devicon-flutter-plain"></i>
                                <i className ="devicon-dart-plain"></i>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.child}>
                        <div className = {styles.image} data-aos = "fade-left">
                            <Image src = {four}/>
                        </div>
                        <div className = {styles.projectinfo} data-aos = "fade-up">
                            <h1>04</h1>
                            <p>Events app UI <br></br>(Button slider animation)</p>
                            <div className = {styles.languages}>
                                <i className ="devicon-flutter-plain"></i>
                                <i className ="devicon-dart-plain"></i>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.childTwo}>
                        <div className = {styles.image}>
                            <Image src = {five}/>
                        </div>
                        <div className = {styles.projectinfo}>
                            <h1>05</h1>
                            <p>Food app UI</p>
                            <div className = {styles.languages}>
                                <i className ="devicon-flutter-plain"></i>
                                <i className ="devicon-dart-plain"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}