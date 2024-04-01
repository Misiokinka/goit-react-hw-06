import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {

    const dispatch = useDispatch()

    const handleDeleteContact = () => {

        dispatch(deleteContact(contact.id))

    }

    return (
        <li className={css.contactsBlock}>
            <div className={css.contactsItems}>
                <span><FaUser size={11} />
                    <p className={css.contactItem}> {contact.name}</p>
                </span>
                <span><FaPhone size={11} />
                    <p className={css.contactItem}>{contact.number}</p>
                </span>
            </div>
            <button className={css.btnDeleteContact} onClick={handleDeleteContact}>Delete</button>

        </li>

    )
}

export default Contact;
