import CoreConcept from "./CoreConcept";
import Section from "./Section";

import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{CORE_CONCEPTS.map((concept, index) => (
					<CoreConcept key={index} {...concept} />
				))}
			</ul>
		</Section>
	);
}

export default CoreConcepts;
