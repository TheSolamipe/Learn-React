import React from 'react';

class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: true,
      name: 'samadi',
      weight: 75,
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLog = this.handleLog.bind(this);
  }

  handleLog(){
    this.setState(prevState =>{
      return(
        {isLoggedIn: !prevState.isLoggedIn}
      )
    })
  }

  handleClick(){
    this.setState(prevState =>{
      return(
        {count: prevState.count + Math.floor(Math.random()*100)}
      )
    })
  }


  render(){
        let wordDisplay;
        let wordTag;
        if(this.state.isLoggedIn){
          wordDisplay = 'In';
          wordTag ='Out';
        }else{
          wordDisplay= 'Out';
          wordTag='In';
        }

        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        const styl = {
          paddingTop: '10px',
          height: '40px'
        }

        if(hours < 12){
          timeOfDay = 'Morning';
          styl.background = '#a5d236';
        }else if(hours >=12 && hours <16){
          timeOfDay = 'Afternoon';
          styl.background = '#d64831';
        }else if(hours > 16){
          timeOfDay = 'Evening';
          styl.background = '#31ced6';
        }



      return(
        <div>
          <div className='footclicks'>
            <h2>You are Currently Logged {wordDisplay}</h2>
            <button onClick = {this.handleLog}>Log {wordTag}</button>
            <h1>{this.state.count}</h1>
            <button onClick = {this.handleClick}> click ME</button>
          </div>
          <h4 style = {styl}>Good {timeOfDay}! Here is the footer guy: {this.state.name}, he terminates everything because he weighs {this.state.weight}kg</h4>

        </div>
        );
      }
}


export default Footer;
