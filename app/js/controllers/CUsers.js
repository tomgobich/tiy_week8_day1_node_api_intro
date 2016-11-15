(() => {

	'use strict';

	angular.module('app')
		.controller('CUsers', function(FApi)
		{

			let vm = this;

			// Get all users from API
			let userListPromise = FApi.getAllUsers();

			// Once returned...
			userListPromise.then(function(response)
			{
				// Target needed data
				vm.userList = response.data;
			});


			// ------------------------------------------------------------
			// Name: deleteUser
			// Abstract: Deletes a user from the users list
			// ------------------------------------------------------------
			vm.deleteUser = function(user)
			{
				// Delete user from list on server
				let deleteUserPromise = FApi.deleteUser(user.userID);

				// Once returned...
				deleteUserPromise.then(function(response)
				{
					// Update local data
					vm.userList = response.data;
				})
			}
		})

})();
