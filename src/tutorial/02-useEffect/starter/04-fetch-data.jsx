import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setUsers(data));

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        // setUsers(data);
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
 
};
export default FetchData;
