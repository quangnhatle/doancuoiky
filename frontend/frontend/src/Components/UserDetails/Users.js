import React, {useState, useEffect} from 'react'
import Nav from '../Nav/Nav';
import axios from "axios";
import User from '../User/User';
import './users.css';
const URL = "http://localhost:5000/users";
const fetchHandler = async() =>{
  return await axios.get(URL).then((res) => res.data);
}
function Users() {
  const [users, setUsers] = useState();
  useEffect(()=>{
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
  fetchHandler().then((data) => {
    const filteredUsers = data.users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setUsers(filteredUsers);
    setNoResults(filteredUsers.length === 0);
  });
}


  return (
    <div>
    <Nav/>
      <h1>Users details Display Page</h1>
      <input onChange={(e)=> setSearchQuery(e.target.value)}
      type = "text"
      name="search"
      placeholder="Search User Details"
      ></input>

      <button onClick={handleSearch}>search</button>

      {noResults ? (
        <div>
          <p>no user found</p>
        </div>
      ):(
      <div>
        {users && users.map((user, i) => (
          <div key={i}>
            <User user={user}/>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Users
