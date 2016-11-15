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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9mYWN0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5mYWN0b3J5KCdGQXBpJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxVc2Vyc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCB1c2Vyc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRBbGxVc2VycyA9IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvJ1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBhZGROZXdVc2VyXG5cdFx0Ly8gQWJzdHJhY3Q6IEFkZHMgYSBuZXcgdXNlclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBhZGROZXdVc2VyID0gZnVuY3Rpb24gYWRkTmV3VXNlcih1c2VyKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRuYW1lOiB1c2VyLm5hbWUsXG5cdFx0XHRcdFx0YWdlOiB1c2VyLmFnZSxcblx0XHRcdFx0XHRqc0ZhbjogdXNlci5qc0ZhblxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2FkZFVzZXInXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGRlbGV0ZVVzZXJcblx0XHQvLyBBYnN0cmFjdDogRGVsZXRlcyBhIHVzZXJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgZGVsZXRlVXNlciA9IGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcklEKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kZWxldGVVc2VyLycgKyB1c2VySURcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldEFsbFVzZXJzOiBnZXRBbGxVc2Vycyxcblx0XHRcdGFkZE5ld1VzZXI6IGFkZE5ld1VzZXIsXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyXG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
