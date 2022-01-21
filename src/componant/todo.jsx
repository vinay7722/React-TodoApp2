import React, { useState } from 'react';
import todo from '../images/temp.jpg'
import '../index.css'

const Todo = () => {

    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }else{
            setItems([...items,inputData])
            setInputData("")
        }

    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem,index)=>{
                return id != index;
        })

        setItems(updatedItems)
    }

    const removeAll = () => {
        setItems([]);
    }

  return (<>
     <div className='main-div'>
        <div className='child-div'>
            <figure>
              <img src={todo}  alt="todologo" />   
              <figcaption>Add Your List Here ✌️</figcaption> 
            </figure>

            <div className='addItems'>
                <input type="text" value={inputData} onChange={(e)=>{setInputData(e.target.value)}} placeholder= '✍️ Add Items...'/>
                <i className='fas fa-plus-square ' title='Add  Item' />
                <button onClick={addItem}>Add</button>
                   
            </div>

            <div className='showItems'>

                {
                    items.map((elem,index)=>{
                        return (
                        <div className='eachItem' key={index}>
                            <h3>{elem}</h3>
                            <i className='fas fa-trash-alt add-btn'  title='Delete Item'></i>
                            <button onClick={() => {deleteItem(index)}}>Delete</button>   
                        </div>)
                    })
                }
            </div>

            <div className='showItems'>
                <button className='btn effect04' onClick={removeAll} data-sm-link-text="Remove All">CheckList</button>
            </div>
        </div>
     </div>
  </>);
};

export default Todo;
