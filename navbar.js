function NavBar(){

  // 1. Identify where in my program the active page is changed (e.g., router in index.js?)
  // 2. Add a console.log at {1.} that logs the old page and the new page. (e.g., 'Switching from page A to page B')
  // 3. Drink more Ovaltine
  // 4. Change the style of any specific tab in the Navbar to the selected style using JS
  // 5. Play Stairway to Heaven
  // 6. Identify the before and after tabs in the Navbar and change their styles when the switch happens.

  let location = ReactRouterDOM.useLocation();
  console.log(location);

  function navA(pagePath, pageTitle) {
    return <a className={'nav-link' + (location.pathname === `/`+pagePath+`/` ? ' active' : '')} href={`#`+pagePath+`/`}>{pageTitle}</a>;
  }

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
    </nav>
    </>
  );
}