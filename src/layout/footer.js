import React from 'react';
import PropTypes from 'prop-types';
import AUfooter, { AUfooterNav, AUfooterEnd } from './_uikit/footer.js';


/**
 * The footer component
 */
const Footer = ({ _body }) => (
	<div className="au-grid au-body au-body--dark">
	  <AUfooter dark>
	    <div className="container-fluid">
	      <AUfooterNav>
	        <div className="row">
	          <div className="col-md-12">
	            <ul className="au-link-list au-link-list--inline">
	              <li><a href="#">Privacy</a></li>
								<li><a href="#">Disclaimer</a></li>
								<li><a href="#">Sitemap</a></li>
	            </ul>
	          </div>
	        </div>
	      </AUfooterNav>
	      <AUfooterEnd>
	        <div className="row">
	          <div className="col-sm-12">
	            <p><small>&copy; Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT license</a></small></p>
	          </div>
	        </div>
	      </AUfooterEnd>
	    </div>
	  </AUfooter>
	</div>
);

Footer.propTypes = {
	/**
	* _body: (test)(12)
	*/
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
