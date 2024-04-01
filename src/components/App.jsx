
import './App.css'
import "modern-normalize";
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBar from './SearchBar/SearchBar';




const App = () => {
  // const [contactList, setContactList] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   return savedContacts ? JSON.parse(savedContacts) : [];
  // });


  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contactList));
  // }, [contactList]);

  return (
    <div className='mainContainer'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />

    </div>)



};

export default App


