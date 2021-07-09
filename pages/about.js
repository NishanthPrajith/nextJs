import Head from 'next/head'
import styles from '../styles/About.module.css'
import Three from '../images/Three.jpg'
import Image from 'next/image'
import Link from 'next/link'
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
                <title>Nishanth Prajith</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p className = {styles.title} data-aos = "fade-right">Hi, I&apos;m Nishanth Prajith</p>
            <p className = {styles.sub} data-aos = "fade-left">University Student & Coder</p>

            <div className = {styles.mainTitle}>
                <div className = {styles.Two} data-aos = "fade-left">
                </div>
                <div className = {styles.One}>
                    <p className = {styles.description} data-aos = "fade-up" data-aos-delay = "300">
                        Born and raised in Kerala, India. Currently living in New York City, United States of America. I am a dynamic and reliable Software Developer with a strong work ethic and a passion for developing user-centric products. Ability to function well independently with little to no supervision or in coordination with a professional team. Experienced in a wide array of programming languages, frameworks and content management sites such as Wordpress.
                    </p>
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "5%"}}>
                <div className = {styles.category} data-aos = "fade-up">
                    <p>Education</p>
                </div>
                <div className = {styles.info} data-aos = "fade-left">
                    <div>
                        <p data-aos = "fade-right" data-aos-delay = "100">2019 - CURRENT</p>
                        <p data-aos = "fade-left" data-aos-delay = "200">BACHELORS IN COMPUTER SCIENCE</p>
                        <p data-aos = "fade-right" data-aos-delay = "300">City College Of New York, New York City, NY</p>
                        <p data-aos = "fade-left" data-aos-delay = "400">I studied web developement and graphic design, specically HTML, CSS, Adobe Photoshop and Illustrator.</p>
                    </div>
                    <div className = {styles.second}>
                        <p data-aos = "fade-right" data-aos-delay = "100">2015 - 2018</p>
                        <p data-aos = "fade-left" data-aos-delay = "200">WEB DESIGN</p>
                        <p data-aos = "fade-right" data-aos-delay = "300">Thomas A. Edison C.T.E High School, Jamaica, NY</p>
                        <p data-aos = "fade-left" data-aos-delay = "400">Currently, studying Computer science at the grove school of engineering.</p>
                    </div>
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "6%"}}>
                <div className = {styles.category} data-aos = "fade-up">
                    <p>Professional Experience</p>
                </div>
                <div className = {styles.info} data-aos = "fade-left">
                    <div>
                        <p data-aos = "fade-right" data-aos-delay = "100">2017 - 2018</p>
                        <p data-aos = "fade-left" data-aos-delay = "200">WEB DESIGNER</p>
                        <p data-aos = "fade-right" data-aos-delay = "300">Thomas A. Edison C.T.E High School, Jamaica, NY</p>
                        <p data-aos = "fade-left" data-aos-delay = "400">I maintained the schools website, and updated it with new events and annoucments on a weekly basis.</p>
                    </div>
                    
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "6%", marginBottom: "4%"}}>
                <div className = {styles.category} data-aos = "fade-up">
                    <p>Coding</p>
                </div>
                <div className = {styles.code}>
                    <p data-aos = "fade-down" data-aos-delay = "1000">Flutter</p>
                    <p data-aos = "fade-down" data-aos-delay = "200">HTML5</p>
                    <p data-aos = "fade-down" data-aos-delay = "300">CSS3</p>
                    <p data-aos = "fade-down" data-aos-delay = "400">C++</p>
                    <p data-aos = "fade-down" data-aos-delay = "500">JAVA</p>
                    <p data-aos = "fade-down" data-aos-delay = "600">Python</p>
                    <p data-aos = "fade-down" data-aos-delay = "700">MySQL</p>
                    <p data-aos = "fade-down" data-aos-delay = "800">Dart</p>
                    <p data-aos = "fade-down" data-aos-delay = "900">Javascript</p>
                </div>
            </div>
            <div className = {styles.resume} style = {{marginTop: "6%", marginBottom: "4%"}}>
                <div className = {styles.category} data-aos = "fade-up">
                    <p>Achievements</p>
                </div>
                <div className = {styles.achieve}>
                    <p data-aos = "fade-right" data-aos-delay = "100">SkillsUSA Web Design National 6th place winner (2018)</p>
                    <hr data-aos = "fade-right" data-aos-delay = "200" style = {{width: "23%", clear: "both"}}></hr>
                    <p data-aos = "fade-right" data-aos-delay = "300" >SkillsUSA Web Design State Champion (2018 & 2017)</p>
                    <hr data-aos = "fade-right" data-aos-delay = "400" style = {{width: "28%", clear: "both"}}></hr>
                    <p data-aos = "fade-right" data-aos-delay = "500">City Wide Graphic Arts Competition 3rd place winner (2018)</p>
                    <hr data-aos = "fade-right" data-aos-delay = "400" style = {{width: "25%", clear: "both"}}></hr>
                </div>
            </div>
            <hr data-aos = "fade-right"></hr>
            <div className = {styles.contact}>
                <div className = {styles.contactLeft} data-aos = "fade-up">
                    <p>If you have any questions reach out to me 
                        <Link href = "/contact">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} className = {styles.arrow} />
                        </Link>
                    </p>
                </div>
                <div className = {styles.contactRight} data-aos = "fade-up">
                    <p>nishanth.prajith@gmail.com</p>
                    <p className = {styles.resumeLink}>View Resume</p>
                </div>
            </div>
        </div>
    );
}