import React from 'react'
import PropTypes from 'prop-types'

export const MainLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}