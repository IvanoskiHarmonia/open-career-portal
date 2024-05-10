import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const JobDescription = ({ jobId }) => {
	const [jobDescription, setJobDescription] = useState("");

	useEffect(() => {
		axios
			.get(`/api/job/${jobId}`)
			.then((response) => {
				setJobDescription(response.data.description);
			})
			.catch((error) => {
				console.error("Error fetching job description:", error);
			});
	}, [jobId]);

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

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<ReactMarkdown components={components} children={jobDescription} />
				</div>
			</div>
		</div>
	);
};

export default JobDescription;
