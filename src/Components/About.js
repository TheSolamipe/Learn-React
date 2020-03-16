import React from 'react';
import Header from './Header';

class About extends React.Component{
  constructor(){
    super()
    this.state ={
      isLoggedIn: true,
      name: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

componentDidMount(){
  fetch('https://www.yudaay.com')
    .then(response => response.json)
    .then(data =>{
      this.setState({
        character: data,
      })
    })
}
handleClick(){
  this.setState(prevState =>{
    return(
      {isLoggedIn: !prevState.isLoggedIn}
    )
  })
}

render(){
  return(
    <div>
      <Header />
      <div>
        <input type='text' value={this.state.name} placeholder='your name' />
        <h2>your name is {this.state.name} and you are {this.state.isLoggedIn}</h2>
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? <h3>Log Out</h3> : <h3>Log in</h3>}</button>
      </div>
    </div>
  )
}
}
export default About;
