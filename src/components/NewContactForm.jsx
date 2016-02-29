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
      var labelClass = "new-contact-form__field new-contact-form__field--" + field.name;
      var spanClass = "new-contact-form__label new-contact-form__label--" + field.name;
      var inputClass = "new-contact-form__input new-contact-form__input--" + field.name;
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
        <div className="new-contact__header">
          <h2 className="new-contact__title">Contacts Keeper</h2>
          <button className="new-contact__button--cancel"
            onClick={this.props.cancel}>
            <img src="images/x-icon.png"></img>
          </button>
        </div>
        <form className="new-contact-form">{fieldElements}</form>
        <div className="new-contact__footer">
          <button className="new-contact__button--save" onClick={this.submit}>
            Save</button>
        </div>
      </div>
    );
  }
});
