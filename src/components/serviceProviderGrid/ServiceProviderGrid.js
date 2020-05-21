import React from 'react'
import { ServiceProviderCard } from './ServiceProviderCard'
import PropTypes from 'prop-types'

export function ServiceProviderGrid({ content }) {

  const buildContent = () => {
    return (
      <div className="serviceProviderGrid">
        {content.map((item, index) => (
          <ServiceProviderCard {...item } key={index} />
        ))}
      </div>
    )
  }

  return buildContent()
}

ServiceProviderGrid.propTypes = {
  content: PropTypes.array.isRequired
}
