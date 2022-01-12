export const Footer = (props) => {
	const links = props.links || [
		{ title: "Forside", url: "#" },
		{ title: "Produkter", url: "#" },
		{ title: "Om os", url: "#" },
		{ title: "Ledige stillinger", url: "#" },
		{ title: "Kontakt os", url: "#" },
	];
	return (
		<footer
			style={{
				width: "100%",
				backgroundImage: "linear-gradient(170deg, #fccb90 0%, #d57eeb 100%)",
			}}
		>
			<nav
				style={{
					maxWidth: "100%",
					textAlign: "center",
					padding: "1vh 0",
				}}
			>
				<ul
					style={{
						listStyle: "none",
						display: "flex",
						maxWidth: "100%",
						justifyContent: "space-evenly",
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
		</footer>
	);
};
