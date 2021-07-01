import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/Footer.module.css'

import { faGithub, faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add (
    faGithub, faFacebook, faInstagram, faLinkedinIn, faCopyright
);


const Footer = () => {
    return (
        <footer>
            <div className = {styles.FirstBox}>
                <p>
                <FontAwesomeIcon icon={['far', 'copyright']} style = {{width: '15px', paddingRight: "3px"}} />
                 2021 | Nishanth Prajith</p>
            </div>
            <div className = {styles.SecondBox}>
                <div>
                    <FontAwesomeIcon icon={['fab', 'github']} style = {{width: '20px'}} />
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'facebook']} style = {{width: '20px'}} />
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'instagram']} style = {{width: '20px'}} />
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} style = {{width: '20px'}} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;