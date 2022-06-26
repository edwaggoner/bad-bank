function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleWithdraw(){
    console.log(withdraw);
    if (!validate(withdraw, 'withdraw')) return;
    ctx.activeUser.balance -= withdraw;
    setShow(false);
  }

  function clearForm(){
    setWithdraw(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (
              <>
              Withdrawal<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="0.00" step="0.01" min= "0.01" value={withdraw} onChange={e => setWithdraw(e.currentTarget.valueAsNumber)} /><br/>
              <div>Current Balance:{ctx.activeUser.balance}</div>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Make Withdrawal</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}
