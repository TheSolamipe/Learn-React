import React from 'react';
import './../styles/list.css';

 function TodoItem(props){
   const indicator ={

   }
   if(props.completed === true){
     indicator.color= '#d81515'
   }
   return(
     <div className='todo-list'>
      <input
      type= 'checkbox'
      checked= {props.completed}
      onChange= {() =>props.handleChange(props.id)}
      />
      <p style={indicator}>{props.objective}</p>
     </div>

   )
 }

export default TodoItem;
