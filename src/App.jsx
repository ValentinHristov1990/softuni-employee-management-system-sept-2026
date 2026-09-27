import { useEffect, useState } from "react";

import SaveUserModal from "./components/SaveUserModal";
import Footer from "./components/FooterSection";
import Header from "./components/HeaderSection";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner";
import DeleteConfirmation from "./components/UserDeleteConfirmation";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import "./styles.css";

const baseURL = "https://ggoxncimrywupljnjvuz.supabase.co/rest/v1/users";
const apiKey = "sb_publishable_H3KNXiPjTSLequcG7Isvkw_zWGrOK7D";

function App() {
  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowSaveUserModal] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addUserClickHandler = () => {
    setShowSaveUserModal(true);
  };

  const addUserCloseHandler = () => {
    setShowSaveUserModal(false);
  };

  const submitUserHandler = async (user) => {
    try {
      await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: JSON.stringify(user),
      });

      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
    } catch (error) {
      alert("Error adding user:" + error);
    } finally {
      setShowSaveUserModal(false);
    }
  };

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          {/* <Spinner /> */}
          <UserSearch />
          <UserList users={users} />
          <button className="btn-add btn" onClick={addUserClickHandler}>
            Add new user
          </button>
          {showSaveUserModal && (
            <SaveUserModal
              onClose={addUserCloseHandler}
              onSubmit={submitUserHandler}
            />
          )}
          <Pagination />
        </section>

        {/* <UserDetails /> */}
      </main>
      {/* <DeleteConfirmation /> */}
      <Footer />
    </>
  );
}

async function fetchUsers() {
  const response = await fetch(baseURL, {
    headers: {
      apikey: apiKey,
    },
  });

  const data = await response.json();
  return data;
}
export default App;
