import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactItem from './ContactsList/ContactItem/ContactItem';

import { addContact, deleteContact } from '../Redux/Contacts/contacts-slice';
// import { setFilter } from '../Redux/Filter/filter-slice';
import {
  getFilteredContacts,
  getContacts,
} from '../Redux/Contacts/contacts-selectors';

// import { getFilter } from '../Redux/Filter/filter-selectors';

import css from './App.module.css';

const styleApp = {
  fontSize: 32,
  color: '#010101',
};

const App = () => {
  // const filter = useSelector(getFilter);
  const allContacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

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

  // const handleFilterChange = ({ target }) => {
  //   dispatch(setFilter(target.value));
  // };

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
          // handlefilterChange={handleFilterChange}
          // filter={filter}
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
