import React from "react";

class NextMeetup extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column gap-2 m-5'>
        <h1>Next Meetup</h1>
        <h3>Awesome meetup and event</h3>
        <p>{new Date().toDateString()}</p>
        <div className='bg-primary p-4 text-white rounded'>
          <p>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience,you may do so during open mic announcements. Remember to bring a photo ID to get through building security.  ..... See you there!</p>
        </div>
      </div>
    )
  }
}

export default NextMeetup