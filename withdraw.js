function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext);

  // Disable submit button until withdrawal amount is entered
  // Make pesky 0 before deposit amount disappear
  // Message to user for overdraft
  // Message to user for NaN

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleErrors(e){
    if ((e.currentTarget.value) === '') {
      setStatus('');
      setWithdraw(0);
      return;
    }
    const notrounded = Number.parseFloat(e.currentTarget.value);
    const number = Math.round(notrounded * 100) / 100;
    if (isNaN(number)) {
      setStatus('Your withdrawal amount must be a number');
      setWithdraw(0);
    } else if (number < 0) {
      setStatus('Your withdrawal amount must be greater than zero');
      setWithdraw(0);
    } else if (number > ctx.activeUser.balance) {
      setStatus('Your withdrawal amount must not be greater than your current balance');
      setWithdraw(0);
    }
    else {
      console.log('setting withdrawal to ' + number);
      setWithdraw(number);
      setStatus('');
    }
  }

  function handleWithdraw(){
    console.log('current balance is: ' + ctx.activeUser.balance);
    console.log('withdrawal amount: ' + withdraw);
    if (!validate(withdraw, 'No withdrawal amount has been entered')) return;
    ctx.activeUser.balance = ctx.activeUser.balance - withdraw;
    console.log('current balance is: ' + ctx.activeUser.balance);
    setShow(false);
  }

  function clearForm(){
    setWithdraw(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={show ? (
              <>
              <p>Withdrawal Amount</p><br/>
              <input className="form-control" id="withdraw" placeholder="0.00" onChange={handleErrors} /><br/>
              <div><p>Current Balance: ${ctx.activeUser.balance.toFixed(2)}</p></div>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={withdraw === 0}><p>Make Withdrawal</p></button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}><p>Make another withdrawal</p></button>
              </>
            )}
    />
  )
}
