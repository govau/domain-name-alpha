import React from 'react';
import PropTypes from 'prop-types';


/**
 * The page layout component
 */
const Page = ({ pagetitle, pageclass, header, main, sidebar, footer, _relativeURL, _ID }) => {
	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#06262d">
<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="Digital Transformation Agency">
<meta name="twitter:card" content="summary_large_image">
<title>Australian Government Domain Names - ${ pagetitle }</title>
<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) } />
<!-- remove the no-js class with js, add analytics -->
<script>
var $html=document.documentElement;if($html.classList)$html.classList.remove("no-js"),$html.classList.add("js");else{var className="no-js";$html.className=$html.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," "),$html.className+=" js"};
</script>
`;

	return (
	<html>
	<head dangerouslySetInnerHTML={{ __html: headContent }} />
	<body className={ `au-grid ${ pageclass !== undefined  ? pageclass : '' }` }>
		<div className="site-wrapper">
			{ header }
			<main className="au-body container-fluid">
				<div className="intro-wrapper">
					<div className="row">
						<div className="col-md-7">
							{ main }
						</div>
						<div className="col-md-offset-1 col-md-4">
							{ sidebar }
						</div>
					</div>
				</div>
			</main>
			{ footer }
		</div>
		<script src={ _relativeURL( '/assets/js/footer.js', _ID ) }></script>
		</body>
	</html>
)};

Page.propTypes = {
/**
	 * title: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
