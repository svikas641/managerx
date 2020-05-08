import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const LeadItem = ({auth, lead: {_id, companyName,clientName,clientEmail,clientPhoneNumber,clientAddress,pincode,salesPerson,date},showActions,fullContent}) => (
		<div className='post bg-white p-1 my-1'>
			<div>
		      <p className='lead'>{companyName}</p>
		      {fullContent && <Fragment>
		      	  <p className='my-1'>Client Name : {clientName}</p>
		      	  <p className='my-1'>Client Email : {clientEmail}</p>
		      	  <p className='my-1'>Client Phone Number : {clientPhoneNumber}</p>
		      	  <p className='my-1'>Client Address : {clientAddress}</p>
		      	  <p className='my-1'>Pincode : {pincode}</p>
		      	  <p className='my-1'>Lead created by : {salesPerson}</p>
		      	</Fragment>}
		      <p className='post-date'>
		        Lead created on <Moment format='DD/MM/YYYY'>{date}</Moment>
		      </p>
		      {showActions && <Fragment>
		      	  <Link to={`/leads-log/${_id}`} className='btn btn-primary'>
		            Lead Information{' '}
		          </Link>
		      	</Fragment>}
		    </div>  
		</div>
);

LeadItem.defaultProps = {
	showActions: true,
	fullContent: false
}

LeadItem.propTypes = {
	lead: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
	auth:state.auth
})

export default connect(mapStateToProps, {})(LeadItem);