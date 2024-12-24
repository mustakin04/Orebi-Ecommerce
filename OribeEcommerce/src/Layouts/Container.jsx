import React from 'react'

const Container = ({className,children}) => {
   
  return (
    <div className={`container mx-auto ${className} `}>{children}</div>
  )
}

export default Container