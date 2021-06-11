export const reducer = (state, action) => {
    // console.log(state, action);

    //for action type of add_item 
    if(action.type === "ADD_ITEM"){
      //pass a new array, and send a copy of states and access people item, and the payload from actions
    const newPeople = [...state.people, action.payload]
    return {
        // copy the states, change modalOpen to true, and give a modalContent
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "Item Added",
    }
    }

    //when no input is provided
    if(action.type === "NO_VALUE"){
    return {
        // keep track of your old state values to not break the app
        ...state,
        isModalOpen: true,
        modalContent: "Please Enter a Value",
    }
    }

    //to close modal
    if(action.type === "CLOSE_MODAL"){
    return {
        ...state,
        isModalOpen: false,
    }
    }

    // removing an item
    if(action.type === "REMOVE_ITEM"){
    const newPeopleList = state.people.filter((person)=> person.id !== action.payload)
    return {
        ...state,
        people: newPeopleList,
        isModalOpen: true,
        modalContent: "Item Removed",
    }
    }

    throw new Error("No Matching Action Found");
}