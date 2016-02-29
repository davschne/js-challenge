(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var contactsModel = function () {

  var contacts = [];
  var counter = 0; // used for assigning a unique ID to each contact

  var add = function (contact) {
    contact.id = counter++;
    contacts.push(contact);
  };

  var getAll = function () {
    return contacts;
  };

  return {
    add: add,
    getAll: getAll
  };
};

module.exports = contactsModel;

},{}],2:[function(require,module,exports){
var Model = require("./contacts-model.js");

var testdata = [{ key: "value0" }, { key: "value1" }];

describe("contacts-model", function () {

  var model;

  beforeEach(function () {
    model = Model();
  });

  describe("#Constructor", function () {
    it("should return a JS object with methods: add, getAll", function () {
      expect(model).toBeDefined();
      expect(model.add).toBeDefined();
      expect(model.getAll).toBeDefined();
    });
  });

  describe("#add", function () {
    it("should add an object provided as argument to the end of the array", function () {
      model.add(testdata[0]);
      expect(model.getAll().length).toEqual(1);
      expect(model.getAll()[0].key).toEqual(testdata[0].key);
      model.add(testdata[1]);
      expect(model.getAll().length).toEqual(2);
      expect(model.getAll()[1].key).toEqual(testdata[1].key);
    });
    it("should add a property 'id' on the object which is unique in the array", function () {
      model.add(testdata[0]);
      model.add(testdata[1]);
      var result = model.getAll();
      expect(result.length).toEqual(2);
      expect(result[0].id).toBeDefined();
      expect(result[1].id).toBeDefined();
      expect(result[0]).not.toEqual(result[1]);
    });
  });

  describe("#getAll", function () {
    it("should return an empty array if no items have been added", function () {
      expect(model.getAll()).toEqual([]);
    });
    it("should return an array of items that have been added", function () {
      model.add(testdata[0]);
      model.add(testdata[1]);
      var result = model.getAll();
      expect(result.length).toEqual(2);
      expect(result[0].key).toEqual(testdata[0].key);
      expect(result[1].key).toEqual(testdata[1].key);
    });
  });
});

},{"./contacts-model.js":1}],3:[function(require,module,exports){
// load app
// require("../src/app.jsx");

// unit tests
require("../src/components/contacts-model_test.js");

},{"../src/components/contacts-model_test.js":2}]},{},[3]);