import React from 'react';

const ExternalLink = ({ url, children }) => (
	<a href={url} target="_blank">
		{children}
	</a>
);

export default ExternalLink;
