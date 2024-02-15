import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Jumbotron