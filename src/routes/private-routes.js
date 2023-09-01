import PropTypes from 'prop-types'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function PrivateRoutes({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet {...rest} element={element} />
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
