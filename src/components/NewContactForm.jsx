var React = require("react");

// form fields
var fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text"
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "text"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text"
  },
  {
    name: "email",
    label: "Email",
    type: "text"
  },
  {
    name: "notes",
    label: "Notes",
    type: "textarea"
  }
];

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

    var fieldElements = fields.map(function(field) {
      var labelClass = "form-field form-field--" + field.name;
      var spanClass = "form-field__label";
      var inputClass = "form-field__input form-field__input--" + field.name;
      return (
        <label key={field.name} className={labelClass}>
          <span className={spanClass}>{field.label}</span>
          <input
            className={inputClass}
            type={field.type}
            name={field.name}
            value={this.state[field.name].value}
            onChange={this.handleChange}
          />
        </label>
      );
    }.bind(this));

    return (
      <div className="new-contact" name="newContact">
        <h2 className="new-contact__title">Contacts Keeper</h2>
        <button
          className="new-contact__button new-contact__button--cancel"
          onClick={this.props.cancel}>
          x</button>
        <form className="new-contact__form">{fieldElements}</form>
        <button
          className="new-contact__button new-contact__button--save"
          onClick={this.submit}>Save</button>
      </div>
    );
  }
});
