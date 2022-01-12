import "./App.scss";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Nav } from "./Components/Nav";
import { Main } from "./Components/Main";

function App() {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			<Header title="" />
			<Nav links="" />
			<Main />
			<Footer />
		</div>
	);
}

export default App;

/* loripsum.net/api/5/verylong/plaintext */
