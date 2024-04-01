
import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from "../../redux/filtersSlice";



const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const nameContactFilter = useSelector(selectNameFilter);

  return (
    <ul className={css.listContacts}>
      {contactList
        .filter((contact) => contact.name.toLowerCase().includes(nameContactFilter.toLowerCase()))
        .map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>

  )
}

export default ContactList


