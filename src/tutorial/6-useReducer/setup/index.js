import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
import { reducer } from './reducer';

// default state for people, isModalOpen & modalContent
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '', 
}; 

const Index = () => {
  // 1 state for name and useReducer 
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState); 

  // for handling submit form
  const handleSubmit = (e) => {
    //prevents from auto submitting
    e.preventDefault();
    if(name){
      // whatever the name is in the state value
      const newItem = {id: new Date().getTime().toString(), name}
      // dispatch an action for adding an item, payload is content of the action
      dispatch({type:"ADD_ITEM", payload: newItem});
      // clear out input field
      setName("")
    }else{
      dispatch({type: "NO_VALUE"})
    }
  };

  //for closing the modal
  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"})
  } 

  return (
  <>
    {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent} />)}
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <button type="submit">Add</button>
      </div>
    </form>
    {state.people.map((person)=>{
      return (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          {/* we have to specific with the item that we want to remove so used id */}
          <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: person.id})}>Remove</button>
        </div>
      );
    })}
  </>
  );
};

export default Index;