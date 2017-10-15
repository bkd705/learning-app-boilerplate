import React from 'react'
import { Link } from 'react-router-dom'

const NavigationItem = ({ to, isBrand, children }) => {
  return (
    <Link to={to} className={isBrand ? 'navbar-brand mr-2' : 'btn btn-link'}>
      {children}
    </Link>
  )
}

export default NavigationItem
