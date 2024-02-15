import React from "react"

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand text-white" href="#">Websiteku</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between flex-grow-1" id="navbarNav">
            <ul className='navbar-nav d-flex text-white flex-grow-1'>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Pricing</a>
              </li>
            </ul>
            <form className="input-group w-25">
              <input type="text" className="form-control" value={this.props.input} onChange={this.props.changeText} placeholder="Input event name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button type="submit" className="btn btn-secondary input-group-append">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar