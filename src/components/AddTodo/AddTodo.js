import React, { useState } from 'react';


const AddTodo = (props) => {

    const [task, setTask] = useState('');
    const [name, setName] = useState('');

    const handleInput = (e) =>{
        setTask(e.target.value)
        
    }

    const handleInput2 = (e) =>{
        
        setName(e.target.value)
    }

    const handleAdd = () =>{
        const newTask = {
            task,
            name,
            status: false,
            id: Date.now()
        }
        props.handleTask(newTask)
        
        setTask('')
    }
  

    function displayModal(e){

    
        let displ =  e.target.nextSibling

        if(displ.style.display === "block"){
            displ.style.display ="none"
        } else{
            displ.style.display ="block"
            
        }       
    }

    return (
        <>
    <div className="wrapBlock">
            <div className="mainAdd" onClick={(e) => displayModal(e)}>+ Добавить

            </div>
            <div className="addModal">
                    <input placeholder="Card name - input" className="addinput" value={name} onChange={handleInput2} type="text" /> <br/>
                    <input placeholder="Description - input" className="addinput" value={task} onChange={handleInput} type="text" /> <br/>
                    
                        
                    
                    <button className="addbtn" onClick={handleAdd}>+ ADD</button>
                    
               </div>
               </div>
        </>
    );
};

export default AddTodo;