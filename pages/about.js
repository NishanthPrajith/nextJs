import Head from 'next/head'
import styles from '../styles/About.module.css'
import Three from '../images/Three.jpg'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add (
    faArrowRight
);


export default function About() {
    return (
        <div className = {styles.container}>
            <Head>
                <title>Personal Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
            </Head>
            <div className = {styles.mainTitle}>
                <div className = {styles.One}>
                    <p className = {styles.title}>Hi I’m Nishanth Prajith, University Student & Coder</p>
                    <p className = {styles.description}>
                        I am a dynamic and reliable Software Developer with a strong work ethic and a passion for developing user-centric products. Ability to function well independently with little to no supervision or in coordination with a professional team. Experienced in a wide array of programming languages, frameworks and content management sites such as Wordpress.
                    </p>
                </div>
                <div className = {styles.Two}>
                    <Image src = {Three} />
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "5%"}}>
                <div className = {styles.category}>
                    <p>Education</p>
                </div>
                <div className = {styles.info}>
                    <div>
                        <p>BACHELORS IN COMPUTER SCIENCE</p>
                        <p className = {styles.italic}>City College Of New York, New York City, NY (2019 - Current)</p>
                        <p>I studied web developement and graphic design, specically HTML, CSS, Adobe Photoshop and Illustrator.</p>
                    </div>
                    <div style = {{marginTop: '3%'}}>
                        <p>WEB DESIGN</p>
                        <p className = {styles.italic}>Thomas A. Edison C.T.E High School, Jamaica, NY (2015 - 2018)</p>
                        <p>Currently, studying Computer science at the grove school of engineering.</p>
                    </div>
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "6%"}}>
                <div className = {styles.category}>
                    <p>Professional Experience</p>
                </div>
                <div className = {styles.info}>
                    <div>
                        <p>WEB DESIGNER</p>
                        <p className = {styles.italic}>Thomas A. Edison C.T.E High School, Jamaica, NY (2017 - 2018)</p>
                        <p>I maintained the schools website, and updated it with new events and annoucments on a weekly basis.</p>
                    </div>
                    
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "6%", marginBottom: "4%"}}>
                <div className = {styles.category}>
                    <p>Coding</p>
                </div>
                <div className = {styles.info}>
                    <i class="devicon-flutter-plain"></i>
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-java-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-cplusplus-plain"></i>
                    <i class="devicon-mysql-plain"></i>
                    <i class="devicon-python-plain"></i>
                    <i class="devicon-dart-plain"></i>
                </div>
            </div>
            <hr></hr>
            <div className = {styles.contact}>
                <div className = {styles.contactLeft}>
                    <p>If you have any questions reach out to me 
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} style = {{width: '19px', marginLeft: "13px", marginTop: "3px"}} />
                    </p>
                </div>
                <div className = {styles.contactRight}>
                    <p>nishanth.prajith@gmail.com</p>
                    <p>View Resume</p>
                </div>
            </div>
        </div>
    );
}