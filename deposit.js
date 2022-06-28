function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState(0);
  const ctx = React.useContext(UserContext);

  // Msg to user for negative deposit amount
  // Disable submit button until valid deposit amount is entered
  // Make pesky 0 disappear
  // Msg to user for NaN

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      // if (deposit != )
      return true;
  }

  function handleErrors(e){
    if ((e.currentTarget.value) === '') {
      setStatus('');
      return;
    }
    const number = Number.parseFloat(e.currentTarget.value);
    if (isNaN(number)) {
      setStatus('Your deposit amount must be a number');
    } else if (number < 0) {
      setStatus('Your deposit amount must be greater than zero');
    } else {
      setDeposit(number);
      setStatus('');
    }
  }

  // if the user inputs a negative number and then deletes the text field, the status should be reset to ""
  function handleDeposit(){
    console.log(deposit);
    if (!validate(deposit, 'No deposit amount has been entered')) return;
    ctx.activeUser.balance += deposit;
    setShow(false);
  }

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (
              <>
              Deposit Amount<br/>
              <input className="form-control" id="deposit" placeholder="0.00" onChange={handleErrors} /><br/>
              <div>Current Balance:{ctx.activeUser.balance}</div>
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Make Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
              </>
            )}
    />
  )
}
