import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from 'components/contact/Contact';

class ContactList extends Component {
  render() {
    return (
      <ul className={css.ul}>
        {this.props.contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={this.props.deleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
};

export default ContactList;