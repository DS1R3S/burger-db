// Dependencies
var orm = require("../config/orm.js");

// We pass in query parameters as required by our ORM and also a callback to receive data
var burger = {
	all: function (cb) {
		orm.all("burgers", function (res) {
			cb(res);
		});
	},
	insert: function (cols, vals, cb) {
		orm.insert("burgers", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function (res) {
			cb(res);
		});
	},
	// delete: function (id, cb) {
	// 	orm.delete("burgers", id, function (res) {
	// 		cb(res)
	// 	})
	// }
};

// Export
module.exports = burger;