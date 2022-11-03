import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import axios from "axios";
// import { GET_CONTACTS } from "../../actions/types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    const contactGets = this.props.getContacts();
    // console.log(contactGets);
  }

  render() {
    const { contacts } = this.props;
    // console.log(contacts);

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2 text-center">
          <span className="text-danger">Contact</span> List
        </h1>

        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch(fetchContacts()),
// });

export default connect(mapStateToProps, { getContacts })(Contacts);
