import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

import { EXAMPLES } from "../data.js";

function Examples() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<Section title="Examples" id="examples">
			<Tabs
				// ButtonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === "components"}
							onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onClick={() => handleClick("jsx")}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onClick={() => handleClick("props")}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onClick={() => handleClick("state")}>
							State
						</TabButton>
					</>
				}>
				<div id="tab-content">
					{!selectedTopic ? (
						<p>Please click a button</p>
					) : (
						<>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</>
					)}
				</div>
			</Tabs>
		</Section>
	);
}

export default Examples;
