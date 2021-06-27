import styles from '../styles/Nav.module.css'

const NavBar = () => {
    return (
        <nav>
            <div className = {styles.FirstBox}>
                <p>Nishanth Prajith</p>
                <p style = {{color: 'gray'}}>University Student</p>
            </div>
            <div className = {styles.SecondBox}>
                <div>
                    <svg width="25" height="11" viewBox="0 0 29 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 0H0V3H29V0Z" fill="#442A24"/>
                        <path d="M29 8H19.3333H9.66667V11H19.3333H29V8Z" fill="#442A24"/>
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;