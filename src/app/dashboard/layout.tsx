import React from 'react'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout