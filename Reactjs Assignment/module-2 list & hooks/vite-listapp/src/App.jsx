import React, { useState } from 'react'
import List from './List';
import UpdateList from './UpdateList';
function App() {
  const listdata = 
  [
    {id:1, name:"rutu"},
    {id:2, name:"divyesh"},
    {id:3, name:"deep"},

  ]
  return (
    <div>
      <h1>List View</h1>
      {listdata.map(({id,name})=>(
        <List key={id} firstname={name}/>
      ))
      }

      <div>
        <UpdateList/>
      </div>
    </div>
  )
}

export default App
