import { useState } from "react"
import { People } from "./components"
import data from "./data"
function App() {
  const [people, setPeople] = useState(data)

  const restore = () => {
    setPeople(data)
  }
  const deleteAll = () => {
    setPeople([])
  }
  const removePerson = (id) => {
    setPeople(prePeople => {
      return prePeople.filter(person => person.id !== id)
    })
  }
  return <People people={people} removePerson={removePerson} deleteAll={deleteAll} restore ={restore}/>
  }
export default App
