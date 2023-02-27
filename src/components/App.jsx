import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';

import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactItem from './ContactsList/ContactItem/ContactItem';

import { addContact, deleteContact } from 'Redux/actions';

// import contacts from './contacts';
// import { save, load } from '../utilis/localStorage';

import css from './App.module.css';

const styleApp = {
  // height: '100vh',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  fontSize: 32,
  color: '#010101',
};

const App = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('my-contacts'));
  //   return contacts ? contacts : [];
  // });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('my-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dublicate = name => {
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalisedName
    );
    return Boolean(dublContact);
  };

  const onAddContact = ({ name, number }) => {
    if (dublicate(name)) {
      return alert('Такой пользователь уже есть');
    }
    const action = addContact({
      name,
      number,
    });
    dispatch(action);
  };

  const onRemoveContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const handlefilterChange = ({ target }) => setFilter(target.value);

  const getFilterContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const filterContacts = getFilterContact();

  return (
    <div style={styleApp} className={css.app}>
      <div className={css.container}>
        <div className={css.phonebook}>
          <h2>Phonebook</h2>

          <ContactsForm onSubmit={onAddContact} />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.contacts}>
          <h2>Contacts</h2>
          <ContactFilter
            handlefilterChange={handlefilterChange}
            filter={filter}
          />
          <ContactsList>
            <ContactItem
              items={filterContacts}
              removeContact={onRemoveContact}
            />
          </ContactsList>
        </div>
      </div>
    </div>
  );
};

export default App;
