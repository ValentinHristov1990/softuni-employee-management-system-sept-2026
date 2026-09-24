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

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          {/* <Spinner /> */}
          <UserSearch />
          <UserList />
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
