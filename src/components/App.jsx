// import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyele';
import { Layout } from './Layout';
import { ContactsBar } from './ContactsBar/ContactsBar';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsBar />
      <Filter />
      <ContactList />
    </Layout>
  );
};
