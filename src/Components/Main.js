import React, { useEffect, useState } from "react";
import styles from "./test.module.scss";

export const Main = (props) => {
	const [paragraphs, setParagraphs] = useState([]);

	useEffect(() => {
		myFetch();
	}, []);

	const myFetch = async () => {
		const promise = await fetch("http://metaphorpsum.com/paragraphs/5/25");
		let data = await promise.text();
		data = data.split(/\n\s*\n/);
		setParagraphs(data);
	};

	return (
		<main className={styles.testclass}>
			{paragraphs
				? paragraphs.map((item, index) => {
						return <p key={index}>{item}</p>;
				  })
				: ""}
		</main>
	);
};
