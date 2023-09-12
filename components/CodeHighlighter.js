'use client'

import { useState } from "react";
import styles from "./CodeHighlighter.module.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeHighlighter = ({ language, children }) => {
        const [ isCopied, setIsCopied ] = useState(false);

        const handleCopy = (e) => {
            navigator.clipboard.writeText(children);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
                                         
        return (
            <div className={styles.wrapper}>
                <SyntaxHighlighter
                    language={language}
                    style={coldarkDark}
                    PreTag="div"
                >
                    { children }
                </SyntaxHighlighter>
                <button 
                    className={styles.copyButton}
                    onClick={handleCopy}
                >
                    {isCopied ? 'Copied' : 'Copy'}
                </button>
            </div>
        )
}