import React, { useState } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  //state for data
  const [people, setPeople] = useState(data)
  //remove person fn, takes id, return a filter of person != id
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  //prop=>return a section with heading and list component takes removePerson prop
  return (
    <section>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

//List component, takes people and removePerson prop, return a frag, map over people, return SinglePerson comp, takes  akey, copy array, removePerson
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

//SinglePerson comp, takes id, name, removePerson, return name and btn for remove, removePerson with id
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling
