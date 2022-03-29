function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary nav-pills">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">DecentBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to the home page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create a new account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a withdrawal">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Access user data">AllData</a>
          </li>          
        </ul>
      </div>
      </div>
    </nav>
    </>
  );
}