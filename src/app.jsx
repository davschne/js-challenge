var React    = require("react");
var ReactDOM = require("react-dom");
var Modal    = require("react-modal");
var model    = require("./components/contacts-model")();

// var Search = React.createClass({});
var NewContactForm = React.createClass({
  getInitialState: function() {
    return {
      firstName: "",
      lastName : "",
      dob      : "",
      phone    : "",
      email    : "",
      notes    : ""
    };
  },
  submit: function() {
    this.props.add(this.state);
  },
  // TODO : track changes to input fields in state
  render: function() {
    return (
      <form name="newContact">
        <h2>Contacts Keeper</h2>
        <button onClick={this.props.cancel}>x</button>
        <label>
          <span>First Name</span>
          <input type="text" name="first-name" />
        </label>
        <label>
          <span>Last Name</span>
          <input type="text" name="last-name" />
        </label>
        <label>
          <span>Date of Birth</span>
          <input type="text" name="date-of-birth" />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="text" name="phone-number" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" name="email" />
        </label>
        <label>
          <span>Notes</span>
          <input type="textarea" name="notes" />
        </label>
        <button onClick={this.submit}>Save</button>
      </form>
    );
  }
});

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
      <main className="main">
        { /* <Search/> */ }
        <button className="button button--add-contact" onClick={this.openModal}>
          Contacts Keeper
        </button>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
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
