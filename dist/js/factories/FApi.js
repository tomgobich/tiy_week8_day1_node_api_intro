'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getAllUsers
		// Abstract: Gets all users
		// ------------------------------------------------------------
		var getAllUsers = function getAllUsers() {
			var promise = $http({
				method: 'GET',
				url: 'http://localhost:3000/api/'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: addNewUser
		// Abstract: Adds a new user
		// ------------------------------------------------------------
		var addNewUser = function addNewUser(user) {
			var promise = $http({
				method: 'POST',
				data: {
					name: user.name,
					age: user.age,
					jsFan: user.jsFan
				},
				url: 'http://localhost:3000/api/addUser'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: deleteUser
		// Abstract: Deletes a user
		// ------------------------------------------------------------
		var deleteUser = function deleteUser(userID) {
			console.log(userID);
			var promise = $http({
				method: 'DELETE',
				url: 'http://localhost:3000/api/deleteUser/' + userID
			});

			return promise;
		};

		return {
			getAllUsers: getAllUsers,
			addNewUser: addNewUser,
			deleteUser: deleteUser
		};
	});
})();