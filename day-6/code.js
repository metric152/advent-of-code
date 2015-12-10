(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		var data = document.getElementById("instructions").value.split("\n");
		var createGridWorker = null;
		var updateGridWorker = null;
		var lights = 0;
		
		// Create the grid
		createGridWorker = SimpleWorker(function(columns, rows){
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
		});
		
		// Make changes to the grid
		function updateGridWorker(x1, y1, x2, y2, action){
			// TODO Check each light before adding or subtracting from the overall total
		}
		
		// Look through the list of commands
		function parseCommands(result){
			var grid = result;
			var regex = /(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/gi; // turn on 489,959 through 759,964
			
			// Loop through commands
			data.forEach(function(instruction){
				var match = regex.exec(instruction);
				// Throw away the top command
				match.shift();
				
				// Figure out what we're doing
				switch(match[0]){
					case "turn on":
					break;
					case "turn off":
					break;
					case "toggle":
					break;
					default:
					break;
				}
			});
		}
		
		// Run the grid worker and move to parsing commands
		createGridWorker(1000 ,1000).then(parseCommands);
	});
})();