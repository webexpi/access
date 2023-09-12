import { getRecentPosts } from "@/util/markdown";
import { PostCard } from "./PostCard";
import styles from "./PostsList.module.css";

export const PostsList = async () => {
    const postDataList = await getRecentPosts("/content");
    return (
        <section>
            <h2 className={styles.title}>Recent posts:</h2>
            <div className={styles.postListWrapper}>
                {postDataList.map(({content, frontMatter}) => (
                    <PostCard
                        key={frontMatter.title}
                        {...frontMatter}
                    />
                ))}
            </div>
        </section>
    )
}