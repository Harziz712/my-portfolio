import React from 'react'

export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
  )
}

