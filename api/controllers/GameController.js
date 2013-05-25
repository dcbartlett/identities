/*---------------------
	:: Game 
	-> controller
---------------------*/
var GameController = {

	// To trigger this action locally, visit: `http://localhost:port/game/index`
	index: function (req,res) {

		// This will render the view: /home/dannick/Documents/programming/identities/views/game/index.ejs
		res.view({
			//javascript: '<script src="something.js"></script>'
            javascript: function () { //Creates the javascript tags
                var files = new Array("something.js"); //List of javascript files to include
                     
                {//The actual work
                
                //Temporary Vars
                var tag = "<script src='123'></script>";
                var taglist, temptag, element = null;                
                var length = files.length;
                
                for (var i = 0; i < length; i++) {
                    element = files[i];
                    temptag = tag.replace("123", element);                       
                    taglist+temptag+"\n";
                    }
                }
            
            
            return taglist;
            }
		});

	}

};
module.exports = GameController;
