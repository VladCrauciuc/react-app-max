import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import { CORE_CONCEPTS } from "./data.js";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept) => (
							<CoreConcept {...concept} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
						<TabButton onClick={() => handleClick("props")}>Props</TabButton>
						<TabButton onClick={() => handleClick("state")}>State</TabButton>
					</menu>
					{!selectedTopic && <p>Please click a button</p>}
					<p>{selectedTopic.toUpperCase()}</p>
				</section>
			</main>
		</div>
	);
}

export default App;
