import Image from "next/image";
import styles from "./Footer.module.css";
import rssIcon from "@/public/rss.svg";

const currentYear = new Date().getFullYear();

export const Footer = () => (
    <footer>

        <hr/>
        <div className={styles.wrapper}>
            <p className={styles.copyrighted}>&copy; {currentYear} Copyrighted</p>
            <div>
                <a href="/rss.xml">
                    <Image
                        src={rssIcon}
                        alt="RSS Feed"
                        width={25}
                        height={25}
                        priority
                    />
                </a>
            </div>
        </div>
    </footer>
)