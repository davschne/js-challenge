var Model = require("./contacts-model.js");

var testdata = [
  { key: "value0" },
  { key: "value1" }
];

describe("contacts-model", function() {

  var model;

  beforeEach(function() {
    model = Model();
  });

  afterEach(function() {
    model.clear();
  });

  describe("#Constructor", function() {
    it("should return a JS object with methods: add, getAll", function() {
      expect(model).toBeDefined();
      expect(model.add).toBeDefined();
      expect(model.getAll).toBeDefined();
    });
  });

  describe("#add", function() {
    it("should add an object provided as argument to the end of the array", function() {
      model.add(testdata[0]);
      expect(model.getAll().length).toEqual(1);
      expect(model.getAll()[0].key).toEqual(testdata[0].key);
      model.add(testdata[1]);
      expect(model.getAll().length).toEqual(2);
      expect(model.getAll()[1].key).toEqual(testdata[1].key);
    });
    it("should add a property 'id' on the object which is unique in the array", function() {
      model.add(testdata[0]);
      model.add(testdata[1]);
      var result = model.getAll();
      expect(result.length).toEqual(2);
      expect(result[0].id).toBeDefined();
      expect(result[1].id).toBeDefined();
      expect(result[0]).not.toEqual(result[1]);
    });
  });

  describe("#getAll", function() {
    it("should return an empty array if no items have been added", function() {
      expect(model.getAll()).toEqual([]);
    });
    it("should return an array of items that have been added", function() {
      model.add(testdata[0]);
      model.add(testdata[1]);
      var result = model.getAll();
      expect(result.length).toEqual(2);
      expect(result[0].key).toEqual(testdata[0].key);
      expect(result[1].key).toEqual(testdata[1].key);
    });
  });

  describe("#clear", function() {
    it("should reset contacts to an empty array, also clearing localstorage", function() {
      model.add(testdata[0]);
      expect(model.getAll().length).toEqual(1);
      model.clear();
      expect(model.getAll().length).toEqual(0);
    });
  });
});
