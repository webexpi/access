import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";

import styles from './Header.module.css';

export const Header = () => (
    <header>
        <div className={styles.headerWrapper}>
            <div>
                <Link href="/" aria-label="Home">
                    <Image
                        src="/devgasy.png"
                        alt="DevGasy Logo"
                        width={80}
                        height={22}
                        priority
                    /> 
                </Link>
            </div>
            <Navigation />
        </div>
        <hr/>
    </header>
);