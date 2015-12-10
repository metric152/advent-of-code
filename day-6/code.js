(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		var data = document.getElementById("instructions").value.split("\n");
		var lights = 0;
		var grid = null;
		
		var ON = "on";
		var OFF = "off";
		var TOGGLE = "togge";
		
		// Create the grid
		function createGrid(columns, rows){
			var finishedGrid = [];
			var row = [];
			
			// Create columns
			for(var i = 0; i < columns; i++){
				row[i] = 0;
			}
			
			// Add rows to grid
			for(var i = 0; i < rows;i++){
				finishedGrid.push(row.concat());
			}
			
			return finishedGrid;
		}
		
		// Make changes to the grid
		function updateGridWorker(x1, y1, x2, y2, action){
			// TODO Check each light before adding or subtracting from the overall total
			console.log( arguments );
		}
		
		// Look through the list of commands
		function parseCommands(){
			
			// Loop through commands
			data.forEach(function(instruction){
				var regex = /(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/gi; // turn on 489,959 through 759,964
				var match = regex.exec(instruction);
				var command = "";
				// Throw away the top command
				match.shift();
				
				// Figure out what we're doing
				switch(match[0]){
					case "turn on":
						command = ON;
					break;
					case "turn off":
						command = OFF;
					break;
					case "toggle":
						command = TOGGLE;
					break;
					default:
					break;
				}
				
				// Update grid
				updateGridWorker(+match[1], +match[2], +match[3], +match[4], command);
			});
		}
		
		// Create the grid
		grid = createGrid(1000, 1000);
		
		// Run the instructions
		parseCommands();
	});
})();