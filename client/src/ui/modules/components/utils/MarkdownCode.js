import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" {...props}>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export default components;
