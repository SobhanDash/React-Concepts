import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    //Provider with value of props to be passed.
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Contet API/ useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const orgData = useContext(PersonContext)
  // console.log(orgData);

  return (
    <>
      {/* the props turns into an object */}
      {orgData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const removePerson = useContext(PersonContext)
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
