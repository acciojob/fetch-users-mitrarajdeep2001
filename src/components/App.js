import React from "react";
import './../styles/App.css';
 
const App = () => {
  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log(data);
  };
 
  return (
    <div>
      <div id="nav">
        <h2>Blue Whales</h2>
        <button className="btn" onClick={() => fetchUsers()}>Get User List</button>
      </div>
      <table id="table">
        <thead>
          <tr className="table-head-row">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.avatar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default App;