function Section({ title, children, ...forwardedProps }) {
	return (
		<section {...forwardedProps}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

export default Section;
