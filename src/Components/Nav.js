export const Nav = (props) => {
	const links = props.links || [
		{ title: "Forside", url: "#" },
		{ title: "Produkter", url: "#" },
		{ title: "Om os", url: "#" },
		{ title: "Ledige stillinger", url: "#" },
		{ title: "Kontakt os", url: "#" },
	];
	return (
		<nav
			style={{
				flex: "1",
				padding: "5vw 2vw",
				boxSizing: "border-box",
			}}
		>
			<ul
				style={{
					listStyle: "none",
					gap: "1.4rem",
					display: "flex",
					flexDirection: "column",
					fontSize: "1.5rem",
					fontWeight: "700",
				}}
			>
				{links.map((item, index) => {
					return (
						<li key={index}>
							<a
								style={{
									textDecoration: "none",
									color: "inherit",
									fontSize: "inherit",
									fontWeight: "inherit",
								}}
								href={item.url}
							>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
