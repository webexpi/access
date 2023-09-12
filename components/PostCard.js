import Image from "next/image";
import Link from "next/link";

import styles from "./PostCard.module.css";

const imageStyle = {
    objectFit: "contain",
    width: "100%",
    height: "auto",
    verticalAlign: "middle"
}

export const PostCard = ({
    title, author, formatedDate, 
    description, slug, heroPicture
}) => (
    <article className={styles.card}>
        <Link href={slug}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={"/assets" + heroPicture}
                        alt=""
                        width={300}
                        height={200}
                        style={imageStyle}
                    />
                </div>
                <div>
                    <p className={styles.author}>{author} - {formatedDate}</p>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </div>
        </Link>
    </article>
)