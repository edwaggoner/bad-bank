function NavBar(){

  // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

  // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" title="On this page you can sign up for a new account!">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item" title="Add money to your account here.">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item" title="Take money out of your account here.">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item" title="View account information for all users.">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}