import React from 'react'
import PropTypes from 'prop-types'

export function ServiceProviderCard({
  name, 
  category,
  phoneNumber,
  email,
  city,
  address,
}) {
  return (
    <>
      <div className="serviceProviderCard">
        <p>{name}</p>
        <p>{category}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>{city}</p>
        <p>{address}</p>
      </div>
    </>
  )
}

ServiceProviderCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}