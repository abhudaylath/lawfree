"use client"
import React, { useState } from 'react'
import SearchSection from './_components/searchSection'
import TemplateListSection from './_components/templateListSection'

function Dashboard() {
  const [userSearchInput,setUserSearchInput] = useState<string>("");
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard