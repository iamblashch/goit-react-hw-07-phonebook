import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

import styles from './contactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const focusRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const onAddContact = data => {
    dispatch(fetchAddContact(data))
  }

  const inputChange = e => {
    const { value, name } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    focusRef.current.focus();
    
    onAddContact(state);

    setState(INITIAL_STATE);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name</label>
      <input
        className={styles.input}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={state.name}
        onChange={inputChange}
        ref={focusRef}
      />
      <label htmlFor="number">Number</label>
      <input
        className={styles.input}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.number}
        onChange={inputChange}
      />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
