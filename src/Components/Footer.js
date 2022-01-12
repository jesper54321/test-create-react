import { Nav } from "./Nav";

export const Footer = (props) => {
	return (
		<footer>
			<Nav links={props.links} />
		</footer>
	);
};
