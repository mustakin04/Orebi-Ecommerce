import React from 'react'

const Dropdown = ({className, onClick, children ,dropRef}) => {
  return (
    <div className={className} onClick={onClick} ref={dropRef}>{children}</div>
  )
}

export default Dropdown