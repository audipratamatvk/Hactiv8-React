import './App.css';
import React from 'react';
import NavBar from './Components/NavBar'
import PastMeetup from './Components/PastMeetup';
import Jumbotron from './Components/Jumbotron';
import NextMeetup from './Components/NextMeetup';
import AboutMeetup from './Components/AboutMeetup';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputSearch: "",
      counter: 0,
      data: [
        {
          no: 1,
          date: "14 Feb 2024",
          name: "Hacktiv8",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        },
        {
          no: 2,
          date: "13 Feb 2024",
          name: "REACT",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          no: 3,
          date: "12 Feb 2024",
          name: "RCTN",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        },
        {
          no: 4,
          date: "12 Feb 2024",
          name: "Hacktiv8",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        }
      ]
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  changeText = (e) => {
    this.setState({
      inputSearch: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar changeText={this.changeText} input={this.state.inputSearch} />
        <Jumbotron />
        <NextMeetup />
        <div className='m-5'>
          <h4>Excercise Action</h4>
          <h1>{this.state.counter}</h1>
          <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        </div>
        <AboutMeetup />
        <PastMeetup data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
