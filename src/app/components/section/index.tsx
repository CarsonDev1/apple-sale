import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-5 lg:py-10 xl:py-20">
      {children}
    </div>
  )
}

export default Section