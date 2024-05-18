import React from 'react'
import "./style.css"

const ToDo = () => {
  return (
    <>
      <div className="main-div">
          <div className="child-div">
              <figure>
                  <figcaption>Add your list here</figcaption>
              </figure>
              <div className="addItems">
                    <input type="text" className="form-control" placeholder='Add task ✍🏻' />
                    <i className="fa-solid fa-square-plus add-btn"></i>
              </div>
              {/* show items */}

              <div className="showItems">
                  <div className="eachItem">
                    <h3>apple</h3>
                    <div className="todo-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                    </div>

                  </div>
              </div>

              {/* remove all buttons */}
              <div className="showItems">
                  <button className="btn">CHECK LIST</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ToDo;
