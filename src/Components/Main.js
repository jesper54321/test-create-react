import React, { useState } from "react";

export const Main = (props) => {
	const [paragraphs, setParagraphs] = useState(props.paragraphs);
	if (!paragraphs) myFetch(setParagraphs, paragraphs);

	return (
		<main>
			{paragraphs
				? paragraphs.map((item, index) => {
						return <p key={index}>{item}</p>;
				  })
				: ""}
		</main>
	);
};

const myFetch = async (setParagraphs, paragraphs) => {
	const promise = await fetch("http://metaphorpsum.com/paragraphs/5/25");
	let data = await promise.text();
	data = data.split(/\n\s*\n/);
	setParagraphs((paragraphs = data));
};
