import React from 'react'

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="block px-10 pb-10 lg:px-24 lg:pb-24">{children}</div>
}

export default PageContainer
