import React from 'react'
import PropTypes from 'prop-types'

export function ServiceProviderCard({
  name, 
  category,
  phoneNumber,
  emailAddress,
  city,
  workSiteAddress,
}) {
  return (
    <>
      <div className='serviceProviderCard'>
        <p>{name}</p>
        <p>{category}</p>
        <p>{phoneNumber}</p>
        <p>{emailAddress}</p>
        <p>{city}</p>
        <p>{workSiteAddress}</p>
      </div>
    </>
  )
}

ServiceProviderCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  workSiteAddress: PropTypes.string.isRequired
}