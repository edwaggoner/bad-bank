function NavBar(){

  let location = ReactRouterDOM.useLocation();
  console.log(location);

  function navA(pagePath, pageTitle) {
    return <a className={'nav-link' + (location.pathname === `/`+pagePath+`/` ? ' active' : '')} href={`#`+pagePath+`/`}>{pageTitle}</a>;
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <a className="navbar-brand" href="#"> &nbsp; BadBank</a>
      <div className="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" title="On this page you can sign up for a new account!">
              {navA('CreateAccount', 'Create Account')}
            </li>
            <li className="nav-item" title="Add money to your account here.">
              {navA('deposit', 'Deposit')}
            </li>
            <li className="nav-item" title="Take money out of your account here.">
              {navA('withdraw', 'Withdraw')}
            </li>
            <li className="nav-item" title="View account information for all users.">
              {navA('alldata', 'All Data')}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}