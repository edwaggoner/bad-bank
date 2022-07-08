function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>BadBank Active Users</h5>
    <br/>
    <table className="table table-success table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Current Balance</th>
        </tr>
      </thead>
      <tbody>
        {
          ctx.users.map(
            (user, i) =>
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>${user.balance}</td>
              </tr>
          )
        }
      </tbody>
    </table>
    </>
  );
}
