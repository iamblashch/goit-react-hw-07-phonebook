import { useEffect } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './contactPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Blocks } from 'react-loader-spinner';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {error ? (
        <p className={styles.error}>Something went wrong. Try again later. </p>
      ) : (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <div className={styles.spiner_box}>
            <h2 className={styles.title}>Contacts</h2>
            {isLoading && (
              <div className={styles.spiner}>
                <Blocks
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                />
              </div>
            )}
          </div>
          <Filter />
          {contacts.length !== 0 && <ContactList />}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
