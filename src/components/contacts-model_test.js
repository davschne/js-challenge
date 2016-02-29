var Model = require("./contacts-model.js");

var testdata = [
  { key0: "value0" },
  { key1: "value1" }
];

describe("contacts-model", function() {

  var model;

  beforeEach(function() {
    model = Model();
  });

  describe("#Constructor", function() {
    it("should return a JS object with methods: add, getAll", function() {
      expect(model).toBeDefined();
      expect(model.add).toBeDefined();
      expect(model.getAll).toBeDefined();
    });
  });

  describe("#add", function() {
    it("should add an object to the end of the array", function() {
      model.add(testdata[0]);
      expect(model.getAll()).toEqual([ testdata[0] ]);
      model.add(testdata[1]);
      expect(model.getAll()).toEqual([ testdata[0], testdata[1] ]);
    });
  });

  describe("#getAll", function() {
    it("should return an empty array if no items have been added", function() {
      expect(model.getAll()).toEqual([]);
    });
    it("should return an array of items that have been added", function() {
      model.add(testdata[0]);
      model.add(testdata[1]);
      expect(model.getAll()).toEqual([ testdata[0], testdata[1] ]);
    });
  });
});
