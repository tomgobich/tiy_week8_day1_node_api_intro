const express 		= require('express');
const cors 			= require('cors');
const bodyParser 	= require('body-parser');
const chalk			= require('chalk');

const app 			= express();

const port = process.env.PORT || 3000;



app.use(cors());

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
  extended: true
}));



let users = [];



app.get('/api/users', function (req, res)
{
	// Return back users as JSON
	res.json(users);
});



app.post('/api/users', function (req, res)
{
	// Get user passed in
	let newUser = req.body.user;

	console.log(chalk.green( newUser.name + ' was added to users'));

	// Add new user to users array
	users.push(newUser);

	// Return the updated array
	res.json(users);
});



app.delete('/api/users/:userID', function(req,res)
{
	// Get the ID passed in
	let userID 		= req.params.userID,
		userIndex 	= null;

	// Find index of passed in ID in users array
	users.forEach(function(user, index)
	{
		if(user.userID == userID)
		{
			userIndex = index;
		}
	});

	// Was a userIndex set?
	if(userIndex !== null)
	{
		// Yes, log in the console that the user was deleted
		console.log(chalk.red(users[userIndex].name + ' was removed from users'));

		// Remove user from users array
		users.splice(userIndex, 1);

		// Return the updated array
		res.json(users);
	}
	else
	{
		// No, put out a warning in the console.
		console.log(chalk.red('A userID match was not found.'));
	}
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
