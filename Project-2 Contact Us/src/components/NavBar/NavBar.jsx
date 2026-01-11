import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={`${styles.NavBar} container`}>
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar
