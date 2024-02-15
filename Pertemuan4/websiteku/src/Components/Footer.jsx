import React from "react";

class Footer extends React.Component {
  render() {
    return (
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
    )
  }
}
export default Footer