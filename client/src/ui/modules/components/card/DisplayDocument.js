import React, { useEffect, useState } from "react";

const DisplayDocument = ({ document }) => {
	const [documentUrl, setDocumentUrl] = useState(null);

	useEffect(() => {
		if (document && document.data) {
			try {
				let base64String;
				if (document.data.type === "Buffer" && Array.isArray(document.data.data)) {
					base64String = btoa(String.fromCharCode(...new Uint8Array(document.data.data)));
				} else if (typeof document.data === "string") {
					base64String = document.data;
				} else {
					throw new Error("Unsupported data format");
				}

				const byteCharacters = atob(base64String);
				const byteNumbers = new Array(byteCharacters.length);
				for (let i = 0; i < byteCharacters.length; i++) {
					byteNumbers[i] = byteCharacters.charCodeAt(i);
				}
				const byteArray = new Uint8Array(byteNumbers);
				const blob = new Blob([byteArray], { type: document.contentType });
				const url = URL.createObjectURL(blob);
				setDocumentUrl(url);
			} catch (error) {
				console.error("Failed to decode Base64 string:", error);
			}
		}
	}, [document]);

	return <div>{documentUrl ? <iframe src={documentUrl} width="100%" height="500px" title="Document Viewer" /> : <p>No document available</p>}</div>;
};

export default DisplayDocument;
