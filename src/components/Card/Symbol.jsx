import React from "react";

const Symbol = ({ value, alt }) => {
	return (
		<span alt={alt} role="img" aria-label={alt ?? " "} aria-hidden={!!alt}>
			{value}
		</span>
	);
};

export default Symbol;
