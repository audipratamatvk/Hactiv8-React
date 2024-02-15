import React from "react"

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
                <div className="card bg-light " key={i} style={{ width: 300 }}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{el.date}</h5>
                      <hr style={{ color: "blue" }} />
                      <p className="card-text" style={{ textAlign: "justify" }}>{el.description}</p>
                    </div>
                    <div>
                      <a href="#" className="btn btn-primary mt-4">{el.name}</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default PastMeetup