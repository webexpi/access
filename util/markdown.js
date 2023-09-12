import matter from 'gray-matter';
import { readFile, readdir, stat } from 'fs/promises';
import path from 'path';

import { ymd, toFriendlyDate } from './dateformat';

const fileExt = '.md';

export const getBlogPost = async (dir = './', filename) => {
    const filePath = path.join(
            process.cwd(), dir, `${filename}${fileExt}`
        ),
        myStat = await stat(filePath),
        data = await readFile(filePath, 
            { encoding: 'utf8' }
        ),
        { content, data: frontMatter } = matter(data);

        frontMatter.slug = `/web/${filename}`;
       
        // date formatting
        const date = frontMatter.createdAt || myStat.ctime;
        frontMatter.date = new Date(date);
        frontMatter.formatedDate = toFriendlyDate(new Date(date));

    return { content, frontMatter }
}

export const getFileNamesInDirectory = async (dir) => {
    const
        directoryPath = path.join(
            process.cwd(), dir
        ),
        files = await readdir(directoryPath);

    return files
        .filter(file => path.extname(file) == fileExt)
        .map(file => path.basename(file, path.extname(file))) 
}


export const getRecentPosts = async (dir) => {
    const currentDate = new Date();
    const files = await getFileNamesInDirectory(dir);
    const data = await Promise.all(files.map((fileName) => getBlogPost(dir, fileName))) ;
    return data
        .filter((blog) => blog.frontMatter && blog.frontMatter.date <= currentDate)
        .map(blog => blog)
        .sort((blog1, blog2) => (blog1.frontMatter.createdAt < blog2.frontMatter.createdAt ? 1 : -1));
}

const getPopularPosts = async () => {
    // get the file lists if not still fetched
    // parse and sort based on their popularities 
}
