function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState(0);
  const ctx = React.useContext(UserContext);



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
      return;
    }

    const notrounded = Number.parseFloat(e.currentTarget.value);
    const number = Math.round(notrounded * 100) / 100;
    if (isNaN(number)) {
      setStatus('Your deposit amount must be a number');
    } else if (number < 0) {
      setStatus('Your deposit amount must be greater than zero');
    } else {
      setDeposit(number);
      setStatus('');
    }
  }


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
              <p>Deposit Amount</p><br/>
              <input className="form-control" id="deposit" placeholder="0.00" onChange={handleErrors} /><br/>
              <div><p>Current Balance: ${ctx.activeUser.balance.toFixed(2)}</p></div>
              <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={deposit === 0}><p>Make Deposit</p></button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}><p>Make another deposit</p></button>
              </>
            )}
    />
  )
}
