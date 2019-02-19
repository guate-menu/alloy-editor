import React, {Component} from 'react';

class HTML extends Component {
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
					<link rel="manifest" href="favicons/site.webmanifest" />
					<link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="favicons/favicon.ico" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-config" content="favicons/browserconfig.xml" />
					<meta name="theme-color" content="#ffffff" />
					{this.props.headComponents}
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
					/>
					<link href="/alloy-editor/assets/css/alloy-editor-ocean.css" />
					<script>
						var ALLOYEDITOR_BASEPATH = CKEDITOR_BASEPATH =
						(/alloy-editor/).toString();
					</script>
					<script src="/alloy-editor/alloy-editor-all-min.js" />
				</head>
				<body {...this.props.bodyAttributes}>
					<div
						id="___gatsby"
						dangerouslySetInnerHTML={{__html: this.props.body}}
					/>
					{this.props.postBodyComponents}
					<script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
					/>
				</body>
			</html>
		);
	}
}

export default HTML;
