import styles from './Header.module.css'
function Header (){
    return(
        <header className={styles.header}>
        <img src="../src/assets/Logo.svg" alt="Logo-To-Do" />
        </header>
    )
}
export default Header;