(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        var data = document.getElementById("instructions").value.split("\n");
        var lights = 0;
        var grid = {};

        var ON = "on";
        var OFF = "off";
        var TOGGLE = "togge";

        function lightOn(light, amount){
            // If light is on leave it alone
            if(grid[light]){
                grid[light] += amount;
            }
            else{
                grid[light] = amount;
            }

            lights += amount;
        }

        function lightOff(light){
            // If the light is off leave it off
            if(!grid[light] || grid[light] === 0) return;

            grid[light]--;
            lights--;
        }

        // Make changes to the grid
        function updateGridWorker(x1, y1, x2, y2, action){
            console.log( arguments );
            var active = true;
            var light = "";
            var x = x1;
            var y = y1;

            while(active){
                light = x + '|' + y;

                switch(action){
                    case ON:
                        lightOn(light, 1);
                    break;
                    case OFF:
                        lightOff(light);
                    break;
                    case TOGGLE:
                        lightOn(light, 2);
                    break;
                }

                if(x < x2){
                    x++;
                }
                else if(x == x2 && y < y2){
                    x = x1;
                    y++;
                }
                else if(y == y2){
                    active = false;
                }
            }
        }

        // Look through the list of commands
        function parseCommands(){
            // Loop through commands
            data.forEach(function(instruction){
                var regex = /(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/gi; // turn on 489,959 through 759,964
                var match = regex.exec(instruction);
                var command = null;
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
                if(command) updateGridWorker(+match[1], +match[2], +match[3], +match[4], command);
            });

            console.log(lights);
        }

        // Run the instructions
        parseCommands();
    });
})();
