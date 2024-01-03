import List from './List'
import UpdateState from './UpdateState'

function App() {

  const listData = [
    {id:1, name:"Rutu"},
    {id:2, name:"drashti"},
    {id:3, name:"usha"},
  ]

  return (
    <>
    <div>
      <h1>List View</h1>
       {
        listData.map(({id,name})=>(
          <List key={id} firstName={name} />
        ))
       }
       </div>

       <div>
       <UpdateState/>
       </div>
    </>
  )
}

export default App
