import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {selectContacts} from 'redux/contacts/contacts-selectors'
import {selectFilter} from 'redux/filter/filter-selectors'

import styles from './contactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newContact;
  };

  const filtredContacts = filterSearch();
  console.log('filteredContacts :>> ', filtredContacts);

  const list = filtredContacts.map(({ id, name, number }) => (
    <ContactItem key={id} id={id} name={name} number={number} />
  ));

  return <ul className={styles.list}>{list}</ul>;
};

export default ContactList;
