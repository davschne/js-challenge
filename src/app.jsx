var React          = require("react");
var ReactDOM       = require("react-dom");

// React components
var Modal          = require("react-modal");
var NewContactForm = require("./components/NewContactForm.jsx");

// data model component
var model          = require("./components/contacts-model.js")();

var modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  content: {
    padding: "0px",
    top: "10%",
    right: "10%",
    bottom: "auto",
    left: "10%",
  }
};

// var Search = React.createClass({});

var App = React.createClass({
  getInitialState: function() {
    return {
      contacts: model.getAll(),
      modalIsOpen: false
    };
  },
  openModal: function() {
    this.setState({ modalIsOpen: true });
  },
  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },
  addContact: function(contact) {
    model.add(contact);
    this.setState({ contacts: model.getAll() });
    this.closeModal();
  },
  cancelAdd: function() {
    this.closeModal();
  },
  render: function() {
    // build rows of table
    var rows = this.state.contacts.map(function(contact) {
      return (
        <tr key={contact.id}>
          <td className="table__cell--body table__cell--firstName">
            {contact.firstName}</td>
          <td className="table__cell--body table__cell--lastName">
            {contact.lastName}</td>
          <td className="table__cell--body table__cell--dob">
            {contact.dob}</td>
          <td className="table__cell--body table__cell--phone">
            {contact.phone}</td>
          <td className="table__cell--body table__cell--email">
            {contact.email}</td>
          <td className="table__cell--body table__cell--notes">{contact.notes}</td>
        </tr>
      );
    });

    return (
      <main className="contacts">

        <div className="button-container">
          <label className="search-contacts">
            <input className="search-contacts__input"
              type="text" name="search" placeholder="Search"/>
            <button className="search-contacts__button">
              <img className="search-contacts__icon"
                src="images/search-icon.png"></img>
            </button>
          </label>
          <button
            className="add-contact-button"
            onClick={this.openModal}>
            <img className="add-contact-button__plus-icon" src="images/plus-icon.png"></img>
            <span className="add-contact-button__text">Contacts Keeper</span>
          </button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}>
          <NewContactForm add={this.addContact} cancel={this.cancelAdd}/>
        </Modal>

        <table className="table">
          <thead className="table__header">
            <tr>
              <th className="table__cell--header table__cell--firstName">
                First Name</th>
              <th className="table__cell--header table__cell--lastName">
                Last Name</th>
              <th className="table__cell--header table__cell--dob">
                Date of Birth</th>
              <th className="table__cell--header table__cell--phone">
                Phone</th>
              <th className="table__cell--header table__cell--email">
                Email</th>
              <th className="table__cell--header table__cell--notes">
                Notes</th>
            </tr>
          </thead>
          <tbody className="table__body">{rows}</tbody>
        </table>

      </main>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));
