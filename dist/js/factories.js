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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2ZhY3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ0ZBcGknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldEFsbFVzZXJzXG5cdFx0Ly8gQWJzdHJhY3Q6IEdldHMgYWxsIHVzZXJzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbFVzZXJzID0gZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8nXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGFkZE5ld1VzZXJcblx0XHQvLyBBYnN0cmFjdDogQWRkcyBhIG5ldyB1c2VyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGFkZE5ld1VzZXIgPSBmdW5jdGlvbiBhZGROZXdVc2VyKHVzZXIpIHtcblx0XHRcdHZhciBwcm9taXNlID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdG5hbWU6IHVzZXIubmFtZSxcblx0XHRcdFx0XHRhZ2U6IHVzZXIuYWdlLFxuXHRcdFx0XHRcdGpzRmFuOiB1c2VyLmpzRmFuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRkVXNlcidcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZGVsZXRlVXNlclxuXHRcdC8vIEFic3RyYWN0OiBEZWxldGVzIGEgdXNlclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBkZWxldGVVc2VyID0gZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySUQpIHtcblx0XHRcdGNvbnNvbGUubG9nKHVzZXJJRCk7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kZWxldGVVc2VyLycgKyB1c2VySURcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldEFsbFVzZXJzOiBnZXRBbGxVc2Vycyxcblx0XHRcdGFkZE5ld1VzZXI6IGFkZE5ld1VzZXIsXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyXG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
