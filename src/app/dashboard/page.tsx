import React from 'react'
import Sidebar from './_components/sidebar'

function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className='md:ml-64 bg-slate-100 h-screen'>
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard