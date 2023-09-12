import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getBlogPost, getFileNamesInDirectory } from "@/util/markdown";
import Link from "next/link";
import styles from "./page.module.css";
import { CodeHighlighter } from "@/components/CodeHighlighter";

export const generateStaticParams = async () => {
    const filePaths = await getFileNamesInDirectory("/content");
    const paths = filePaths.map(fileName => ({slug: fileName}));

    return paths;
}

const BlogPost = async ({ params }) => {
    const { content, frontMatter } = await getBlogPost("/content", params.postTitle);
    const customRenderers = {
        a: ({ href, children, ...props }) => (
            <Link href={href} {...props}>{ children }</Link>
        ),
        code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
                <CodeHighlighter
                    language={match[1]}
                >
                    {children}
                </CodeHighlighter>
            ) : (
                <code {...props} className={className}>
                    {children}
                </code>
            )
        } 
    }

    return (
        <main>
            <article className={styles.blogPostContainer}>
                <ReactMarkdown components={customRenderers}>
                    {content}
                </ReactMarkdown>
            </article>
        </main>

    )
}

export default BlogPost;
