function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdrawal, setWithdrawal] = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [status, setStatus] = React.useState('');

  function makeWithdrawal(){
    if(Number(withdrawal) > Number(balance)){
       alert('Insufficient funds');
       return false;
    } else {
    setBalance(Number(balance) - Number(withdrawal));
    ctx.users[0].balance = Number(ctx.users[0].balance)-Number(withdrawal);
    alert('Successful withdrawal!');
    return true;
    }
  };
  
  return (
    <div className="card bg-warning text-white" style={{maxWidth:"18rem"}} status={status}>
      <div className="card-body">
      <div className="card-title">
        <h5>Withdraw</h5>
      </div>
      <div className="card-subtitle">
        Current Balance: ${ctx.users[0].balance}
      </div>
      <br/>
        <form>
          <input type="input" className="form-control" id="withdrawal" placeholder="Enter Amount" pattern="\d+(\.\d{2})?" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)} required/>
          <br/>
          <button type="submit" className="btn btn-light" onClick={makeWithdrawal} disabled={!withdrawal}>Submit</button> 
        </form>
      </div>

    </div>
  )
}
