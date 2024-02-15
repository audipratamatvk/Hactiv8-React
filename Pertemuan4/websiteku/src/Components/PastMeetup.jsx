import React from "react"
import Card from "./Card"

class PastMeetup extends React.Component {
  render() {
    return (
      <div className='m-5'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <h1>Past Meetups</h1>
          <h5>See all</h5>
        </div>
        <div className='d-flex gap-4 justify-content-between'>
          {
            this.props.data.map((el, i) => {
              return (
                <Card key={i} name={el.name} date={el.date} description={el.description} i={el.no} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default PastMeetup