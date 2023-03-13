import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import PropTypes from 'prop-types';
import styles from './contactItem.module.scss';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button className={styles.btn} onClick={() => handleRemove(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
