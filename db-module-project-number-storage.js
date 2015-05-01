/**
 * Self practice: Number Storage
 * 
 * Write a module pattern that:
 *
 * 1. looks up a db and lets a user know whether the number exists or not.
 * 2. adds a number to the db if the number does not exist.
 * 3. deletes a number from the db if the number exists.
 * 4. logs the db.
 */

/*                                        Module Pattern
======================================================================================================
*/

var DB = (function() {

	var db = [];

	return {
      init: function() {},
            
			lookup: function(num) {
				if (db.length === 0) {
					console.log('db is empty');
					return true;
				}
				if (db.indexOf(num) > -1) {
					console.log(num + ' exists.');
					return false;
				}
				if (db.indexOf(num) === -1) {
					console.log(num + ' does not exist.');
					return true;
				}
			},

			add: function(num) {
				if (this.seek(num)) {
					console.log(num + ' has been added.');
					db.push(num);
					return true;
				} else {
					console.log(num + ' could not be added.');
					return false;
				}
			},
			del: function(num) {
				if (!(this.seek(num))) {
					console.log(num + ' has been deleted.');
					db.splice(db.indexOf(num), 1);
				} else {
					console.log(num + ' cannot be deleted.');
				}
			},

			log: function() { console.log(db); }

		    };
})();

/*                                     Revealing Module Pattern
======================================================================================================
*/

var DB = (function() {

	var db = [];

	var init = function() {};
            
	var lookup = function(num) {
							if (db.length === 0) {
								console.log('db is empty');
								return true;
							}
							if (db.indexOf(num) > -1) {
								console.log(num + ' exists.');
								return false;
							}
							if (db.indexOf(num) === -1) {
								console.log(num + ' does not exist.');
								return true;
							}
						};

	var add = function(num) {
							if (this.seek(num)) {
								console.log(num + ' has been added.');
								db.push(num);
								return true;
							} else {
								console.log(num + ' could not be added.');
								return false;
							}
						};
			
	var	del = function(num) {
							if (!(this.seek(num))) {
								console.log(num + ' has been deleted.');
								db.splice(db.indexOf(num), 1);
							} else {
								console.log(num + ' cannot be deleted.');
							}
						};

	var log = function() { console.log(db); };

	return {
		      init 	 : init,      
					lookup : lookup,
					add    : add,
					del    : del,
					log    : log
  		   };
})();
