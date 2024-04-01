
import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";


const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Username is Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Phone number is Required"),

});

const INITIAL_FORM_DATA = {
    name: "",
    number: ""
}

const ContactForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (data, formActions) => {
        dispatch(addContact({ ...data, id: nanoid() }))
        formActions.resetForm()
    }

    return (

        <Formik
            validationSchema={ContactSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <Form className={css.formContact}>

                <label className={css.labelContac}>
                    <span className={css.formContactText}>Name</span>
                    <Field className={css.formInputContact} type="text" name="name" />
                    <ErrorMessage className={css.errorMsg} name="name" component="span" />

                </label>

                <label className={css.labelContac}>
                    <span className={css.formContactText}>Number</span>
                    <Field className={css.formInputContact} type="number" name="number" />
                    <ErrorMessage className={css.errorMsg} name="number" component="span" />

                </label>

                <button className={css.submitBtn} type="submit" title="Add contact" aria-label="Add contact">Add contact</button>

            </Form>
        </Formik>



    )
}

export default ContactForm