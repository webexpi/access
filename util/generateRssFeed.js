import { writeFile } from 'fs/promises';
import path from 'path';
import { Feed } from "feed";
import { getRecentPosts } from "./markdown";

const site_url = 'localhost:3000';

export const generateRssFeed = async () => {
    const allPosts = await getRecentPosts('/content');
    const options = {
        title: 'DevGasy blog posts | RSS Feed',
        description: 'Easy web development with our experiences',
        id: site_url,
        link: `${site_url}/rss.xml`,
        language: "en",
        image: `${site_url}/devgasy.png`,
        favicon: `${site_url}/favicon.ico`,
        updated: new Date(),
        copyright: `All rights reserved 2023, DevGasy`
    };

    const myFeed = new Feed(options);

    allPosts.forEach(({content, frontMatter}) => {
        myFeed.addItem({
         title: frontMatter.title,
         description: frontMatter.description,
         id: `${site_url}/web/${frontMatter.slug}`,
         link: `${site_url}/web/${frontMatter.slug}`,
         content: content,
         date: frontMatter.date,
        });
    });

    const targetedPath = path.join(process.cwd(),'/public/rss.xml');
    await writeFile(targetedPath, myFeed.rss2());
}