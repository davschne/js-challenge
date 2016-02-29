var React          = require("react");
var ReactDOM       = require("react-dom");

// React components
var Modal          = require("react-modal");
var NewContactForm = require("./components/NewContactForm.jsx");

// data model component
var model          = require("./components/contacts-model.js")();

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
    var rows = this.state.contacts.map(function(contact) {
      return (
        <tr key={contact.id}>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.dob}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.notes}</td>
        </tr>
      );
    });

    return (
      <main className="contacts">
        { /* <Search/> */ }
        <button
          className="contacts__button contacts__button--add"
          onClick={this.openModal}>
          Contacts Keeper</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>
          <NewContactForm add={this.addContact} cancel={this.cancelAdd}/>
        </Modal>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </main>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));
