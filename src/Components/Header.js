export const Header = (props) => {
	const title = props.title || "Jesper's React App";
	document.querySelector("title").text = title;
	return (
		<header
			style={{
				width: "100%",
				textAlign: "center",
				backgroundImage: "linear-gradient(170deg, #fccb90 0%, #d57eeb 100%)",
			}}
		>
			<h1>{title}</h1>
		</header>
	);
};
