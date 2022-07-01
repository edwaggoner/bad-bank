function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameready, setNameready]     = React.useState(false);
  const [emailready, setEmailready]   = React.useState(false);
  const [passready, setPassready]     = React.useState(false);
  const ctx = React.useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleNameChanged(e){
    const value = e.currentTarget.value;
    setName(value);
    if (value === '') {
      setStatus('');
      setNameready(false);
      return;
    }
    setNameready(true);
  }

  function handleEmailChanged(e){
    const value = e.currentTarget.value;
    setEmail(value);
    if (value === '') {
      setStatus('');
      setEmailready(false);
      return;
    }
    if (!(value.includes('@'))) {
      setStatus('Your email must include @');
      setEmailready(false);
      return;
    }
    // Set status to '' so that ...the error msg about including @ does not display
    setStatus('');
    setEmailready(true);
  }

  function handlePasswordChanged(e){
    const value = e.currentTarget.value;
    setPassword(value);
    if (value === '') {
      setStatus('');
      setPassready(false);
      return;
    }
    let length = value.length;
    if (length < 8) {
      setStatus('Your password must contain at least 8 characters');
      setPassready(false);
      return;
    }
    setStatus('');
    setPassready(true);
    if (nameready === true && passready === true && emailready === false) {
      setStatus('Your email must include @');
    }
  }


// if name is OK, email has something but does not include '@', and password is 8 or greater OK, the 'Your email must include @' msg should be displayed.

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const newUser = {name,email,password,balance:100};
    ctx.users.push(newUser)
    ctx.activeUser = newUser;
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setNameready(false);
    setEmailready(false);
    setPassready(false);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
              <>
              Name<br/>
              <input className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleNameChanged} /><br/>
              Email address<br/>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChanged}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChanged}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!(nameready === true && emailready === true && passready === true)}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}