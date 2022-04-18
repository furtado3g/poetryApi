import { useState, useEffect } from 'react';
import styles from '../styles/modules/index.module.css';
import Image from 'next/image';
import Link from 'next/link';
const index = () => {

    const [isActive, setIsActive] = useState(false);
    const [changeBar, setChangeBar] = useState(styles.change);
    const [activeMenu, setActiveMenu] = useState(styles.active);
    useEffect(() => {
        console.log('useEffect');	
        if (isActive) {
            setChangeBar(styles.change);
            setActiveMenu(styles.active);
        }else{
            setChangeBar('');
            setActiveMenu('');
        }
    }, [isActive]);	
 

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/image/logo_anemia_poetry.png" alt="logo" width={50} height={50} />
                </div>
                <div className={`${styles.nav}`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.button_container}>
                    <Link href="/login">
                        <button className={styles.button}>Login</button>
                    </Link>
                </div>
                <div className={styles.mobile_button} onClick={e=>setIsActive(!isActive)}>
                    <div className={`${styles.bar1} ${changeBar}`}></div>
                    <div className={`${styles.bar2} ${changeBar}`}></div>
                    <div className={`${styles.bar3} ${changeBar}`}></div>
                </div>
            </div>
            <div className={`${styles.mobile_nav} ${activeMenu}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/login">
                    <button className={styles.button}>Login</button>
                </Link>
            </div>

            <div className={styles.content}>

                <p>Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Leite de capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris se pirulitá.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>
            </div>
        </div>

    )
}

export default index;
