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
          <td className="table__cell">{contact.firstName}</td>
          <td className="table__cell">{contact.lastName}</td>
          <td className="table__cell">{contact.dob}</td>
          <td className="table__cell">{contact.phone}</td>
          <td className="table__cell">{contact.email}</td>
          <td className="table__cell">{contact.notes}</td>
        </tr>
      );
    });

    return (
      <main className="contacts">
        <div className="contacts__button-container">
          <label className="contacts__search">
            <input type="text" name="search" placeholder="Search"/>
            <button className="contacts__button contacts__button--search">
              <img src="images/search-icon.png"></img>
            </button>
          </label>
          <button
            className="contacts__button contacts__button--add"
            onClick={this.openModal}>
            <img src="images/plus-icon.png"></img>
            <span>Contacts Keeper</span>
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>
          <NewContactForm add={this.addContact} cancel={this.cancelAdd}/>
        </Modal>
        <table className="table">
          <thead className="table__header">
            <tr>
              <th className="table__cell">First Name</th>
              <th className="table__cell">Last Name</th>
              <th className="table__cell">Date of Birth</th>
              <th className="table__cell">Phone</th>
              <th className="table__cell">Email</th>
              <th className="table__cell">Notes</th>
            </tr>
          </thead>
          <tbody className="table__body">{rows}</tbody>
        </table>
      </main>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));
