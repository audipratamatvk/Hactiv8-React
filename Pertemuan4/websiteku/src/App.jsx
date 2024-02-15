import './App.css';
import React from 'react';
import NavBar from './Components/NavBar'
import PastMeetup from './Components/PastMeetup';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          date: "14 Feb 2024",
          name: "Hacktiv8",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        },
        {
          date: "13 Feb 2024",
          name: "REACT",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          date: "12 Feb 2024",
          name: "RCTN",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        },
        {
          date: "12 Feb 2024",
          name: "Hacktiv8",
          description: "Quis recusandae est quaerat atque eius cupiditate non neque quidem saepe consequuntur rerum alias nisi, cumque odit iusto et voluptas ipsa nostrum?"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 d-flex gap-4 align-items-center">
          <img className='rounded-circle' width={300} height={300} src="https://awsimages.detik.net.id/community/media/visual/2023/04/14/gambar-pemandangan-6.jpeg?w=3000" alt="" />
          <div className="container-fluid py-5 d-flex flex-column">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <div>
              <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column gap-2 m-5'>
          <h1>Next Meetup</h1>
          <h3>Awesome meetup and event</h3>
          <p>{new Date().toDateString()}</p>
          <div className='bg-primary p-4 text-white rounded'>
            <p>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience,you may do so during open mic announcements. Remember to bring a photo ID to get through building security.  ..... See you there!</p>
          </div>
        </div>
        <div className='d-flex flex-column m-5 '>
          <h1 className='mb-2'>About Meetup</h1>
          <div className=''>
            <p>Come and meet other developers interested in the JavaScript and its library in Greater Jakarta Area</p>
            <p>Twitter : @JakartaJS and We use the hastag #jakartajs</p>
          </div>
        </div>
        <PastMeetup data={this.state.data} />
        <footer className="bg-dark d-flex flex-wrap justify-content-between align-items-center py-3 px-5 mt-4 border-top">
          <p className="col-md-4 mb-0 text-white">© 2024 Company, Inc</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
