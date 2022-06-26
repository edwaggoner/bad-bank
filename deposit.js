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
      // if (deposit != )
      return true;
  }

  function handleDeposit(){
    console.log(deposit);
    if (!validate(deposit, 'deposit')) return;
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
              <input type="number" className="form-control" id="deposit" placeholder="0.00" step="0.01" min="0.01" value={deposit} onChange={e => setDeposit(e.currentTarget.valueAsNumber)} /><br/>
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
