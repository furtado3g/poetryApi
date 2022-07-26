import { useState, useEffect } from "react";
import styles from "../styles/modules/index.module.css";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  const [isActive, setIsActive] = useState(false);
  const [changeBar, setChangeBar] = useState(styles.change);
  const [activeMenu, setActiveMenu] = useState("invisible");
  useEffect(() => {
    console.log(isActive);
    if (isActive) {
      setChangeBar(styles.change);
      setActiveMenu('visible'); 
    } else {
      setChangeBar("");
      setActiveMenu("invisible");
    }
  }, [isActive]);

  return (
    <div className="container-2xl">
      <div className="w-scroll flex p-2 bg-zinc-900  px-3">
        <div className="h-[50px] w-[80px] flex items-center justify-center">
          <Image
            src="/image/logo_anemia_poetry.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="text-zinc-100 w-auto flex gap-3 justify-center items-center invisible md:visible">
          <Link href="/">
            <div className="h-[50px] flex items-center justify-center cursor-pointer hover:bg-zinc-700 rounded-xl transition-colors ease duration-400 p-2">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="h-[50px] flex items-center justify-center cursor-pointer hover:bg-zinc-700 rounded-xl transition-colors ease duration-400 p-2">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="h-[50px] flex items-center justify-center cursor-pointer hover:bg-zinc-700 rounded-xl transition-colors ease duration-400 p-2">
              Contact
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center cursor-pointer ml-auto invisible md:visible">
          <Link href="/login">
            <button className={styles.button}>Login</button>
          </Link>
        </div>
        <div
          className="visible md:invisible"
          onClick={(e) => setIsActive(!isActive)}
        >
          <div className={`${styles.bar1} ${changeBar}`}></div>
          <div className={`${styles.bar2} ${changeBar}`}></div>
          <div className={`${styles.bar3} ${changeBar}`}></div>
        </div>
      </div>
      <div className={`${activeMenu} md:invisible h-fill flex flex-col bg-zinc-900 h-fit`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>

      <div className={styles.content}>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex
          eros. Vivamus sit amet nibh non tellus tristique interdum.Leite de
          capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris
          se pirulitá.Praesent malesuada urna nisi, quis volutpat erat hendrerit
          non. Nam vulputate dapibus.
        </p>
      </div>
    </div>
  );
};

export default index;
