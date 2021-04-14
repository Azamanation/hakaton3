import React, {useState} from 'react';
import './EditModal.css';

const EditModal = (props) => {
    let [item, setItem] = useState(props.editTodo)
    function handleEditInput(e){
        let newObj ={...item}
        newObj.task = e.target.value
        setItem(newObj)
    }

    function handleEditInput2(e){
        let newObj ={...item}
        newObj.name = e.target.value
        setItem(newObj)
    }


  

    function handleSave(){
      props.handleSaveTask(item)
    }
    
    return (
        <div className="main-modal ">
            <div className="inner-modal">   
               
                <input 
                        onChange={handleEditInput}
                        type="text"
                        value={item.task} 
                        className="inp-edit"
                        placeholder="CARD NAME - input"
                        />

                <input 
                        onChange={handleEditInput2}
                        type="text"
                        value={item.name} 
                        className="inp-edit"
                        placeholder="DESCRIPTION - input"
                        />

                



                <button className="editSave" onClick={handleSave}>Save</button>
                <div className="close">
                    <button className="closeBtn" onClick={props.handleCloseModal}>&times;</button>
                </div>
            </div>            
        </div>
    );
};

export default EditModal;