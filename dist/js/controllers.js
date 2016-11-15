'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CUsers', function (FApi) {

		var vm = this;

		// Get all users from API
		var userListPromise = FApi.getAllUsers();

		// Once returned...
		userListPromise.then(function (response) {
			// Target needed data
			vm.userList = response.data;
		});

		// ------------------------------------------------------------
		// Name: deleteUser
		// Abstract: Deletes a user from the users list
		// ------------------------------------------------------------
		vm.deleteUser = function (user) {
			// Delete user from list on server
			var deleteUserPromise = FApi.deleteUser(user.userID);

			// Once returned...
			deleteUserPromise.then(function (response) {
				// Update local data
				vm.userList = response.data;
			});
		};
	});
})();
'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CAddUser', function (FApi, $state) {

		var vm = this;

		// ------------------------------------------------------------
		// Name: addUser
		// Abstract: Adds a new user to the user list
		// ------------------------------------------------------------
		vm.addUser = function (isValid, addUserForm) {
			// Is the form valid?
			if (isValid) {
				// Yes, post the image via Database API
				var newUserPromise = FApi.addNewUser(vm.postData);

				// Once returned...
				newUserPromise.then(function (response) {
					// Response status 200?
					if (response.status === 200) {
						// Yes, reset the form
						resetForm(addUserForm);

						// Redirect the user to the home view
						$state.go('home');
					}
				});
			} else {
				// No, warn the user to check validation
				alert('Please ensure all fields are valid and try again.');
			}
		};

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Handles image post form
		// ------------------------------------------------------------
		var resetForm = function resetForm(form) {
			// Clear the form data
			vm.postData = {};

			// Reset angular states
			form.$setPristine();
			form.$setUntouched();
		};
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNVc2Vycy5qcyIsIkNBZGRVc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NvbnRyb2xsZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ1VzZXJzJywgZnVuY3Rpb24gKEZBcGkpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyBHZXQgYWxsIHVzZXJzIGZyb20gQVBJXG5cdFx0dmFyIHVzZXJMaXN0UHJvbWlzZSA9IEZBcGkuZ2V0QWxsVXNlcnMoKTtcblxuXHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHR1c2VyTGlzdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdC8vIFRhcmdldCBuZWVkZWQgZGF0YVxuXHRcdFx0dm0udXNlckxpc3QgPSByZXNwb25zZS5kYXRhO1xuXHRcdH0pO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZGVsZXRlVXNlclxuXHRcdC8vIEFic3RyYWN0OiBEZWxldGVzIGEgdXNlciBmcm9tIHRoZSB1c2VycyBsaXN0XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dm0uZGVsZXRlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0XHQvLyBEZWxldGUgdXNlciBmcm9tIGxpc3Qgb24gc2VydmVyXG5cdFx0XHR2YXIgZGVsZXRlVXNlclByb21pc2UgPSBGQXBpLmRlbGV0ZVVzZXIodXNlci51c2VySUQpO1xuXG5cdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRkZWxldGVVc2VyUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQvLyBVcGRhdGUgbG9jYWwgZGF0YVxuXHRcdFx0XHR2bS51c2VyTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ0FkZFVzZXInLCBmdW5jdGlvbiAoRkFwaSwgJHN0YXRlKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogYWRkVXNlclxuXHRcdC8vIEFic3RyYWN0OiBBZGRzIGEgbmV3IHVzZXIgdG8gdGhlIHVzZXIgbGlzdFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmFkZFVzZXIgPSBmdW5jdGlvbiAoaXNWYWxpZCwgYWRkVXNlckZvcm0pIHtcblx0XHRcdC8vIElzIHRoZSBmb3JtIHZhbGlkP1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0Ly8gWWVzLCBwb3N0IHRoZSBpbWFnZSB2aWEgRGF0YWJhc2UgQVBJXG5cdFx0XHRcdHZhciBuZXdVc2VyUHJvbWlzZSA9IEZBcGkuYWRkTmV3VXNlcih2bS5wb3N0RGF0YSk7XG5cblx0XHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0XHRuZXdVc2VyUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIFJlc3BvbnNlIHN0YXR1cyAyMDA/XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHQvLyBZZXMsIHJlc2V0IHRoZSBmb3JtXG5cdFx0XHRcdFx0XHRyZXNldEZvcm0oYWRkVXNlckZvcm0pO1xuXG5cdFx0XHRcdFx0XHQvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgaG9tZSB2aWV3XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdG8gY2hlY2sgdmFsaWRhdGlvblxuXHRcdFx0XHRhbGVydCgnUGxlYXNlIGVuc3VyZSBhbGwgZmllbGRzIGFyZSB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBwb3N0SW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxlcyBpbWFnZSBwb3N0IGZvcm1cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgcmVzZXRGb3JtID0gZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcblx0XHRcdC8vIENsZWFyIHRoZSBmb3JtIGRhdGFcblx0XHRcdHZtLnBvc3REYXRhID0ge307XG5cblx0XHRcdC8vIFJlc2V0IGFuZ3VsYXIgc3RhdGVzXG5cdFx0XHRmb3JtLiRzZXRQcmlzdGluZSgpO1xuXHRcdFx0Zm9ybS4kc2V0VW50b3VjaGVkKCk7XG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
