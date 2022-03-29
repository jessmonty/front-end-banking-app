function Deposit(){
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [status, setStatus] = React.useState('');


  function makeDeposit(){
      setBalance(Number(deposit) + Number(balance));
      ctx.users[0].balance = Number(ctx.users[0].balance) + Number(deposit);
      alert('Successful deposit!');
    return true;
  }
  return (
    <div className="card bg-warning text-white" style={{maxWidth:"18rem"}} status={status}>
      <div className="card-body">
      <div className="card-title">
        <h5>Deposit</h5>
      </div>
      <div className="card-subtitle">
        Current Balance: ${ctx.users[0].balance}
      </div>
      <br/>
        <form>
          <input type="input" className="form-control" id="deposit" placeholder="Enter Amount" pattern="\d+(\.\d{2})?" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} required/>
          <br/>
          <button type="submit" className="btn btn-light" onClick={makeDeposit} disabled={!deposit}>Submit</button> 
        </form>
      </div>

    </div>
  )
}
