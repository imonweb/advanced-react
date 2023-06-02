import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {user, setUser} = useState(null);

  useEffect(() => {
  const fetchData = async () => {
        try {
          const response = await fetch(url);
          const user = await response.json();
          console.log(user);
          // setUsers(data);
          setUser(user)
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      }
      fetchData();
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (isError) {
      return <p>Error...</p>;
    }
  return  <div>
      <img src={user.avatar_url} style={{width: '150px',borderRadius:'25px'}} alt={user.name} />
      <h2>{user.avatar_url}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
};
export default MultipleReturnsFetchData;
