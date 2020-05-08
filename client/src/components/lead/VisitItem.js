import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const VisitItem = ({
  leadId,
  visit: { _id, status, commentBox, clientName, clientEmail, clientPhoneNumber, date },
  auth
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <p className='my-1'> Status : {status}</p>
      <p className='my-1'> Comment : {commentBox}</p>
      <p className='my-1'> Client Name : {clientName}</p>
      <p className='my-1'> Client Email :  {clientEmail}</p>
      <p className='my-1'> Client Phone Number : {clientPhoneNumber}</p>
      <p className='post-date'>
        Visited on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>
    </div>
  </div>
);

VisitItem.propTypes = {
  leadId: PropTypes.string.isRequired,
  visit: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps 
)(VisitItem);