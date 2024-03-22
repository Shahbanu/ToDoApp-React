
import './todoApp.css';
import React, { useState } from 'react';

const TodoApp = () => {
  const [toDos, setToDos] = useState([]);
  const [toDoInput, setToDoInput] = useState('');
  const [toDoInputEdit, setToDoInputEdit] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddToDo = () => {
    if (toDoInput.trim() !== '') {
      setToDos([...toDos, toDoInput]);//[...toDos, toDoInput]: This is an array spread operator ([...]) that creates a new array containing all the elements of the current toDos array (...toDos) and appends the new value toDoInput to it. This effectively adds a new item to the toDos array. toDoInput: This is the new value that you want to add to the toDos array.

      setToDoInput('');
    }
  };

  const handleDelete = (index) => {
    const newArray = toDos.filter((_, i) => i !== index);
    setToDos(newArray);
  };

  const updateAddToDo = (index) => {
    if (toDoInputEdit.trim() !== '') {
      const newArr = [...toDos];
      newArr[index] = toDoInputEdit;
      setToDos(newArr);
      setToDoInputEdit('');
      setEditingIndex(null);
    }
  };

  return (
    <section className="container">
      <div className="heading">
        <h1>ToDo App</h1>
      </div>
      <form id="form">
        <input
          value={toDoInput}
          onChange={(e) => setToDoInput(e.target.value)}
          type="text"
          id="input"
          placeholder="Add New Task"
        />
        <div id="msg"></div>
        <br />
        <button onClick={handleAddToDo} type="button">
          Add
        </button>
      </form>

      <h2>Tasks</h2>

      <div id="posts">
        {toDos.map((value, index) => (
          <div key={index}>
            {editingIndex === index ? (
              <>
                <input 
                  value={toDoInputEdit}
                  onChange={(e) => setToDoInputEdit(e.target.value)}
                  type="text"
                  id="input"
                  placeholder="Update New Task"
                />
                <button onClick={() => updateAddToDo(index)} type="button"
                className='update-btn'>
                  Update
                </button>
              </>
            ) : (
              <p>{value}</p>
            )}

            <span className="options">
              <i
                className="fas fa-edit"
                onClick={() => {setEditingIndex(index);
                setToDoInputEdit(value)}}
              ></i>
              <i onClick={() => handleDelete(index)} className="fas fa-trash-alt"></i>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoApp;