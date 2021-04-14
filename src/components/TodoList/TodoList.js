import React from 'react';
import './TodoList.css'

const TodoList = (props) => {


function displayBlock(e){
    if(e.target.childNodes[1].style.display==="block"){
        e.target.childNodes[1].style.display="none"
        e.target.style.backgroundColor="black"       
    }else{
        e.target.childNodes[1].style.display="block"
        e.target.style.backgroundColor="#597da3"

    }
    
}







    
    return (
        
       <div className="container">
            <div className="textJS">Java Script</div>
            <div className="docMain"><div className="documentation">Перейти к документации</div></div>

           {props.todos.map((item, index) => (
             
                   <div key={item.id} onClick={(e) => displayBlock(e)} className="block" id="block" >{item.name}     

                               

                        <div onClick={(e) => e.stopPropagation(e)} className="modal-container">
                            
                      
                            
                            {item.task}
                            
                            <div></div>
                            <div></div>


                            <button className="todo-buttons" onClick={() => props.handleDelete(item.id)} >DELETE  <div></div><div></div><div></div><div></div></button>
                            <button className="todo-buttons" onClick={() => props.handleEdit(index)} >EDIT <div></div> <div></div><div></div><div></div></button>
                            <div className="itemID">ID: {item.id} <div></div> <div></div></div>
                      

                            

                        </div>                

                        
                    </div>  
                        

         
                  
                  
           ))}
        

       </div>
    );
};

export default TodoList;