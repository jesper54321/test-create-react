export const Header = (props) => {
	const title = props.title || "Jesper's React App";

	document.querySelector("title").text = title;

	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
};
