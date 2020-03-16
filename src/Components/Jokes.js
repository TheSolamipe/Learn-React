import React from 'react';


const Jokes = (props)=> {
  const looks = {
    border: '1px solid #888888'
  }
  if(props.question === ''){
    looks.background= '#f30547eb';
    looks.color= 'white'
  }else {
    looks.display = 'block';
  }
  return(
    <div>
      <p>{props.id}</p>
      <p><b>Question:</b> {props.question}</p>
      <p style= {looks}><em>Punchline:</em> {props.punchline}</p>
      <br/>
    </div>
  )
}
export default Jokes;
