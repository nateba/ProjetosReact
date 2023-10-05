
import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo ignite" />
            <strong >Nateba Feed</strong>
            <img src={igniteLogo} alt="Logotipo ignite" />
        </header>

    );
}