import React, { useState } from 'react'
import "./style.css"

const ToDo = () => {
  const [inputData, setInputData ]= useState("");
  const [items, setItems] = useState([]);
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
  }
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
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can" onClick={()=> deleteItem(curElem.id)}></i>
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
