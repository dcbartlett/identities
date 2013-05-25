/*---------------------
	:: Game 
	-> controller
---------------------*/
var GameController = {

	// To trigger this action locally, visit: `http://localhost:port/game/index`
	index: function (req,res) {

		// This will render the view: /home/dannick/Documents/programming/identities/views/game/index.ejs
		res.view({
			javascript: '<script src="something.js"></script>'
		});

	}

};
module.exports = GameController;
