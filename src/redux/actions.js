import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
      choosen: false,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const toggleChoosen = contactId => {
  return {
    type: 'contacts/toggleChoosen',
    payload: contactId,
  };
};

export const toggleBlocked = contactId => {
  return {
    type: 'contacts/toggleBlocked',
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

export const contactFilter = value => {
  return {
    type: 'filter/filterContact',
    payload: value.toLowerCase(),
  };
};
