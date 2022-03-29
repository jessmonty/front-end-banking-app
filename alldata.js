function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (
    <div className="table bg-warning text-white" style={{maxWidth:"40rem"}}>
      <table id="userData">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Password</th><th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {ctx.users.map((item, index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
