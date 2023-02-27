import PropTypes from 'prop-types';

import css from './ContactsForm.module.css';

const ContactsForm = () => {
  return (
    <form className={css.form}>
      <label className={css.titleInputForm}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Fedor Fedorov"
        />
      </label>
      <label className={css.titleInputForm}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="227-91-26"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
