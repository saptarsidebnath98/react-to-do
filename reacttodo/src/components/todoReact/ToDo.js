import React, { useEffect, useState } from 'react'
import "./style.css"

//get locat storage data
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
};

const ToDo = () => {
  const [inputData, setInputData ]= useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");

  //add the items
  const addItem = () => {
    if(!inputData){
      alert("Please enter value to the filed");
    }else{
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    };
  };

  //edit item
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    })
    setIsEditItem(index);
  }
  //how to delete item section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    })
    setItems(updatedItems);
  }

  //remove all
  const removeAll = () => {
    setItems([]);
  };

  //adding localStorage  
  useEffect(()=> {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  },[items]);

  return (
    <>
      <div className="main-div">
          <div className="child-div">
              <figure>
                  <figcaption>Add your list here</figcaption>
              </figure>
              <div className="addItems">
                    <input type="text" className="form-control" placeholder='Add task ✍🏻' value={inputData} onChange={(event)=> setInputData(event.target.value)}/>
                    <i className="fa-solid fa-square-plus add-btn" onClick={addItem}></i>
              </div>
              {/* show items */}

              <div className="showItems">
                    {items.map((curElem, index) => {
                      return(

                  <div className="eachItem" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                    <i className="fa-solid fa-pen-to-square" onClick={()=> editItem(curElem.id)}></i>
                    <i className="fa-solid fa-trash-can" onClick={()=> deleteItem(curElem.id)}></i>
                    </div>

                  </div>
                      )
                    })}
              </div>

              {/* remove all buttons */}
              <div className="showItems">
                  <button className="chk-btn" onClick={removeAll}>CHECK LIST</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ToDo;
