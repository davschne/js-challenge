var contactsModel = function() {

  var contacts = [];
  var counter = 0; // used for assigning a unique ID to each contact

  var add = function(contact) {
    contact.id = counter++;
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
