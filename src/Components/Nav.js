export const Nav = (props) => {
	const links = props.links || [
		{ title: "Forside", url: "#" },
		{ title: "Produkter", url: "#" },
		{ title: "Om os", url: "#" },
		{ title: "Ledige stillinger", url: "#" },
		{ title: "Kontakt os", url: "#" },
	];

	return (
		<nav>
			<ul>
				{links.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.url}>{item.title}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
