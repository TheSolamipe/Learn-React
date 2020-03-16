import React from 'react';

class Fetch extends React.Component{
  constructor(){
    super();
    this.state ={
      loading: false,
      character: {},
      firstname: '',
      lastname: '',
      gender: '',
      Favcolor: 'White'
    }
    this.handleChange = this.handleChange.bind(this);

  }

//  componentDidMount(){
//    this.setState({loading:true})
//    fetch('https://swapi.co/api/people/1')
//      .then(response => response.json())
//      .then(data => {
//          this.setState({
//            loading: false,
//            character: data
//          })
//      })
//  }

  handleChange(event){
    const {name, value}= event.target
    this.setState({
      [name]: value
    })
  }


  render(){
  //  const text = this.state.loading ? Loading... : {this.state.character.name}
  // <h3>{text}</h3>
    return(

      <form>
        <input type='text' placeholder='first name' value={this.state.firstname} name='firstname' onChange={this.handleChange}/>
        <br/>
        <input type='text' placeholder='last name' value={this.state.lastname} name='lastname' onChange={this.handleChange}/><br/>
        <label><input type='radio' value='male' name='gender' onChange={this.handleChange}/> Male</label>
        <label><input type='radio' value='female' name='gender' onChange={this.handleChange}/> Female</label>
        <h1>{this.state.firstname} {this.state.lastname}</h1>
        <h2>You are a {this.state.gender}</h2>
        <select value={this.state.Favcolor} onChange={this.handleChange} name='Favcolor'>
        Favcolor:
          <option value='white'>White</option>
          <option value='orange'>Orange</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
          <option value='red'>Red</option>
          <option value='yellow'>Yellow</option>
        </select><br/>
        <button>Submit </button>
      </form>
    )
  }
}
export default Fetch;
