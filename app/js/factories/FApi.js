(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getAllUsers
			// Abstract: Gets all users
			// ------------------------------------------------------------
			const getAllUsers = function()
			{
				let promise = $http({
					method: 'GET',
					url: `http://localhost:3000/api/`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: addNewUser
			// Abstract: Adds a new user
			// ------------------------------------------------------------
			const addNewUser = function(user)
			{
				let promise = $http({
					method: 'POST',
					data: {
						name:	user.name,
						age:	user.age,
						jsFan:	user.jsFan,
					},
					url: `http://localhost:3000/api/addUser`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: deleteUser
			// Abstract: Deletes a user
			// ------------------------------------------------------------
			const deleteUser = function(userID)
			{
				console.log(userID);
				let promise = $http({
					method: 'DELETE',
					url: `http://localhost:3000/api/deleteUser/${userID}`,
				})

				return promise;
			}




			return {
				getAllUsers,
				addNewUser,
				deleteUser,
			}
		})
})();
