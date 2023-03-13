import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://640f24454ed25579dc471475.mockapi.io/contacts',
});

export const getAllContacts = () => contactInstance('');

export const addContact = data => {
  return contactInstance.post('', data);
};

export const deleteContact = id => {
  return contactInstance.delete(`${id}`);
};
