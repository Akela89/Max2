import React from "react";

function EditableList() {
    const [list,setList] = React.useState([
      {
        name:'Крупа',
      },
      {
        name:'Крупа',
      },
      {
        name:'Крупа',
      },
      {
        name:'Крупа',
      },  
    ])
    const [item,setItem] = React.useState()
    
    function handleSubmit(event){
      event.preventDefault()
      setList([...list,item])
      setItem('')
    }
    console.log(handleSubmit)
    return (
      <div className="container">
        <h1>Editable List - Add</h1>
        <p className="lead">Adding new entry</p>
        <p>Press <kbd>enter</kbd> on done</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="text">New item</label>
            <input 
              className="form-control"
              value={item} 
              onChange={e=>setItem(e.target.value)} 
            />
          </div>
        </form>
        
        <ul className="list-group shadow">
          {list.map((element,index)=>(
              <li key={index} className="list-group-item">{element.name}
              </li>
            ) 
          )}
        </ul>
      </div>
    )
  }
  

export default EditableList;
