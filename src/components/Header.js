import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add a Task'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'To Do List'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
