import { useState, useEffect } from 'react';
import './App.css';
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async (page) => {

    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const users = await response.json();
      const usersData = users.data;

      console.log(usersData);
      return usersData;

    } catch (error) {
      console.error(error);

    }
  }

  useEffect( () => { updateData(page) }, [page] )

  const updateData = async (page = 1) => {
    try {
      const usersData = await getData(page);
      setUsers(usersData);

    } catch (error) {
      console.error(error);

    }

  }

  return (
    <div className="App">
      <Users users={users} />

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}> 1 </button>
        <button disabled={page === 2} onClick={() => setPage(page + 1)}> 2 </button>
      </div>

    </div>
  );
}

export default App;
