import AUheader, { AUheaderBrand } from './_uikit/header';

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';



/**
 * The partial component
 *
 * @disable-docs
 */
const Header = ({ _body }) => (
	<div className="au-grid au-body au-body--dark">
		<AUheader hero dark>
		  <div className="container-fluid">
		    <div className="row">
		      <div className="col-md-9">
		        <AUheaderBrand
		          title="Australian Government Domain Names"
		          subline="gov.au domain name administration service"
		          brandImage="/assets/img/header-logo-agov.png"
		          brandImageAlt="Insert alternate text here"
		        />
		      </div>
		    </div>
		  </div>
		</AUheader>
	</div>
);

Header.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
