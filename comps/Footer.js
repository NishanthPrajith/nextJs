import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/Footer.module.css'
import { useRouter } from "next/router";

import { faGithub, faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add (
    faGithub, faFacebook, faInstagram, faLinkedinIn, faCopyright
);


const Footer = () => {
    const router = useRouter();
    return (
        <footer style = {router.pathname === "/about"
            ? {position: "absolute", bottom: "0"}
            : {}
        }>
            <div className = {styles.shadow} data-aos = "fade-in" data-aos-delay = "600">
            </div>
            <div className = {styles.FirstBox}>
                <p>
                <FontAwesomeIcon icon={['far', 'copyright']} style = {{width: '15px', paddingRight: "3px"}} />
                 2021 | Nishanth Prajith</p>
            </div>
            <div className = {styles.SecondBox} style = { router.pathname === "/about"
                                    ? {color: "#ffffff"}
                                    : {color: "#000000"}}>
                <div>
                    <a href ="https://github.com/NishanthPrajith" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} style = {{width: '20px'}} />
                    </a>
                </div>
                <div>
                    <a href ="https://www.facebook.com/people/Nishanth-Prajith/100009547906410/" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook']} style = {{width: '20px'}} />
                    </a>
                </div>
                <div>
                    <a href = "https://www.instagram.com/nishanthprajith/?hl=en" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'instagram']} style = {{width: '20px'}} />
                    </a>
                </div>
                <div>
                    <a href = "https://www.linkedin.com/in/nishanth-prajith" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} style = {{width: '20px'}} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;