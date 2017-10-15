import React from 'react'
import classnames from 'classnames'

const Button = ({ children, isPrimary, isLink, isDisabled }) => {
  const className = classnames('btn', {
    'btn-primary': isPrimary,
    'btn-link': isLink,
  })
  return (
    <button className={className} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button
