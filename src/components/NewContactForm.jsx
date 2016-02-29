var React = require("react");

module.exports = React.createClass({
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
  handleChange: function(event) {
    var stateUpdate = {};
    stateUpdate[event.target.name] = event.target.value;
    this.setState(stateUpdate);
  },
  render: function() {
    return (
      <form name="newContact">
        <h2>Contacts Keeper</h2>
        <button onClick={this.props.cancel}>x</button>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Date of Birth</span>
          <input
            type="text"
            name="dob"
            value={this.state.dob}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Notes</span>
          <input
            type="textarea"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.submit}>Save</button>
      </form>
    );
  }
});
