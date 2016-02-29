var contactsModel = function() {

  var contacts; // array for storing contact records
  var counter; // used for assigning a unique ID to each contact

  var init = function() {
    // try retrieving data from local storage
    var stored = JSON.parse(localStorage.getItem("contacts"));
    counter = 0;
    contacts = stored ? resetIDs(stored) : [];
  }

  var resetIDs = function(array) {
    array = array.map(function(contact) {
      contact.id = counter++;
      return contact;
    });
    return array;
  };

  var save = function() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  var add = function(contact) {
    contact.id = counter++;
    contacts.push(contact);
    save(); // save to local storage
  };

  var getAll = function() {
    return contacts;
  };

  var clear = function() {
    contacts = [];
    counter  = 0;
    localStorage.setItem("contacts", "null");
  };

  init();

  return {
    add: add,
    getAll: getAll,
    clear: clear
  }
}

module.exports = contactsModel;
