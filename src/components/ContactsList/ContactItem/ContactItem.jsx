import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContacts } from 'Redux/selectors';
import css from './ContactItem.module.css';

const ContactItem = () => {
  const items = useSelector(getContacts);

  const contact = items.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button
        className={css.btnDelete}
        // onClick={() => removeContact(id)}
        type="button"
      >
        X
      </button>
    </li>
  ));
  return <>{contact}</>;
};

export default ContactItem;

ContactItem.defaultProps = {
  items: [],
};

// ContactItem.propTypes = {
//   removeContact: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
