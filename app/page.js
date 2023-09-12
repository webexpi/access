import { PostsList } from '@/components/PostsList';
import styles from './page.module.css';
import { generateRssFeed } from '@/util/generateRssFeed';


export const generateStaticParams = async () => {
  await generateRssFeed();
  return [{slug: '/'}];
}

const Home = () => {
  return (
    <main>
      <h1 className={styles.landpageTitle}>Easy web development with our experiences</h1>
      <PostsList/>
    </main>
  )
}

export default Home;