import React from 'react';

function ContactCard(props){
  const stylious = {
    width: '200px',
    height: '270px'
  }
  return(
    <div>
      <img style= {stylious} src={props.imgUrl} alt='chilled pics'/>
      <h2>{props.name}</h2>
      <p>{props.about}</p>
    </div>
  )
}
export default ContactCard;
