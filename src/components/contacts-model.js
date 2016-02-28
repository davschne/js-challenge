var contactsModel = function(_contacts) {

  var contacts = _contacts ? _contacts : [];

  var add = function(contact) {
    contacts.push(contact);
  };

  var getAll = function() {
    return contacts;
  };

  return {
    add: add,
    get: getAll
  }
}

module.exports = contactsModel;
