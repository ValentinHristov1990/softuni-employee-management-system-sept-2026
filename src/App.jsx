import { useEffect, useState } from 'react';

import CreateEdit from './components/CreateEditSection';
import Footer from './components/FooterSection';
import Header from './components/HeaderSection';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import DeleteConfirmation from './components/UserDeleteConfirmation';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import './styles.css';

function App() {

  const [users, setUsers] = useState([]);
  console.log(users)
  useEffect(() => {
    fetch('https://ggoxncimrywupljnjvuz.supabase.co/rest/v1/users', {
      headers: {
        'apikey': 'sb_publishable_H3KNXiPjTSLequcG7Isvkw_zWGrOK7D'
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);
  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          {/* <Spinner /> */}
          <UserSearch />
          <UserList users={users} />
          <button className="btn-add btn">Add new user</button>
          <Pagination />
        </section>

        {/* <UserDetails /> */}
      </main >
      {/* <CreateEdit /> */}
      {/* <DeleteConfirmation /> */}
      <Footer />
    </>
  )
}

export default App
