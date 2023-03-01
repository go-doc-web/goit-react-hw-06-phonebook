import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';

import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactItem from './ContactsList/ContactItem/ContactItem';

import { addContact, deleteContact, setFilter } from 'Redux/actions';
import { getFilteredContacts, getFilter, getContacts } from 'Redux/selectors';

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
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getContacts);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('my-contacts'));
  //   return contacts ? contacts : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('my-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dublicate = name => {
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = allContacts.find(
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

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

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
            handlefilterChange={handleFilterChange}
            filter={filter}
          />
          <ContactsList>
            <ContactItem
              items={filteredContacts}
              removeContact={onRemoveContact}
            />
          </ContactsList>
        </div>
      </div>
    </div>
  );
};

export default App;
