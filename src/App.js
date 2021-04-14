import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import EditModal from './components/EditModal/EditModal';

import TodoList from './components/TodoList/TodoList';
import './App.css';
import Hblock from './components/Hblock/Hblock';
import Fblock from './components/Fblock/Fblock';


const App = () => {

const [todos, setTodos] = useState([]);    //  Создается ХУК, с пустым массивом


const [modal, setModal] = useState(false)  //  Создается ХУк, со значением False
const [editTodo, setEditTodo] = useState ({});  // Создается ХУК, с пустым объектом

async function handleTask(newObj){  // Функция
  let newTodos = [...todos]; // которая создает новый массив, в коротый он кладет все предыдущие таски с помощью Спред опертора
  newTodos.push(newObj);  // пушит в созданный массив новый таск, переданный в качестве аргумента функции
  await setTodos(newTodos);  // после заверщения предыдущей операции, обновляет данные в todos на newTodos

}




function changeStatus(id){     
  let newTodos = todos.map(item =>{    // Создает новую переменную в которой через фильтр 
    if(item.id === id){                // если ID === Id то он переварачивает булиан значение item.status'а
      item.status = !item.status
    }
    return item     // возвращает значение item'a
  })
  setTodos(newTodos) // обновляет данные в todos на newTodos
}

function handleDelete(id){   // 
  let newTodos = todos.filter(item => { // Создает новую переменную в котором фильрует 
    return item.id !== id // и возвращает все item.id которые не совпадает с ID
  })
 
  setTodos(newTodos) // обновляет данные в todos на newTodos
}

  function handleEdit(index){   // функция
    setModal(true)  //которая булиан значение setModal стаRFвит True
    setEditTodo(todos[index]) // которая 
  }




  function handleSaveTask(newTask){
    let newTodos = todos.map(item =>{
    if(item.id === newTask.id){
      return newTask
    }
    return item
  })
  setTodos(newTodos)
  handleCloseModal()

  }
  function handleCloseModal(){
    setModal(false)
  }

  

  return (

    

    

    <div className="main-div">

      <Hblock/>
     
          
     
     
      {modal ?   <EditModal 
        editTodo={editTodo} 
        handleSaveTask ={handleSaveTask}     
        handleCloseModal ={handleCloseModal}
      /> 
      : null}




    
     

         <AddTodo 
          handleTask = {handleTask}
          />

<div className="wrapper">
          <TodoList       
               
            todos = {todos}
            changeStatus = {changeStatus}
            handleDelete = {handleDelete}
            handleEdit = {handleEdit}
           
         />
      </div> 
      <Fblock />
    </div>
 
);
};

export default App;