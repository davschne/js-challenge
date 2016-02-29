var contactsModel = function() {

  var contacts = [];

  var add = function(contact) {
    contacts.push(contact);
  };

  var getAll = function() {
    return contacts;
  };

  return {
    add: add,
    getAll: getAll
  }
}

module.exports = contactsModel;
