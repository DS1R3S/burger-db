// Dependencies
var orm = require("../config/orm.js");

// We pass in query parameters as required by our ORM and also a callback to receive data
var burger = {
	all: function (cb) {
		orm.all("burgers", function (data) {
			cb(data);
		});
	},
	create: function (cols, vals, cb) {
		orm.create("burgers", cols, vals, function (data) {
			cb(data);
		});
	},
	update: function ( objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function (data) {
			cb(data);
		});
	}
};

// Export
module.exports = burger;