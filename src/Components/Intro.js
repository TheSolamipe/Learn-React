import React from 'react';
import './../styles/list.css';
import TodoItem from './TodoItem';
import ContactCard from './ContactCards';
import Jokes from './Jokes';
import JokesData from './JokeData';
import TodoData from './TodoData';
import ContactData from './ContactData';
import Products from './Products';
import ProductData from './ProductData';
import Conditional from './Conditional';
import Fetch from './Fetch';


class Intro extends React.Component {
  constructor(){
    super();
    this.state ={
        todos: TodoData,
        jokes: JokesData,
        contacts: ContactData,
        products: ProductData,
        isLoading: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading: false
      })
    }, 2500)
  }

  handleChange(id){
    console.log('i got changed', id)
    //this.setState(prevState =>{

    //})
  }

  render(){
  const jokeComponent = this.state.jokes.map(joke => <Jokes question= {joke.question} punchline= {joke.punchline} key= {joke.id}/> );
  const todoComponent = this.state.todos.map(todo => <TodoItem key= {todo.id} objective= {todo.objective} handleChange = {this.handleChange} />);
  const contactComponent = this.state.contacts.map(function(contact){
      return(<ContactCard key={contact.id} name={contact.name} imgUrl={contact.imgUrl} about={contact.about}/>);
    });
  const productComponent = this.state.products.map(product => <Products key={product.id} about={product.about} price={product.price} name={product.name} />);

  return(
      <div className="content">
        <div className="todo">
        <h3>How to become a front-end developer</h3>
          {todoComponent}<br/>
        <h3>Enjoy some dry Jokes</h3>
          {jokeComponent}
          <Fetch />
        </div>
        <div className="contact">
          {contactComponent}<br/>
          {productComponent}<br/>
          {this.state.isLoading ? <h1>Loading.....</h1>:
          <Conditional />}
        </div>
      </div>
    );
  }
}
export default Intro;
