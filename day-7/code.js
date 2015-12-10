(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		var data = document.getElementById("instructions").value.split("\n");
        var circuit = {};

        var AND = "AND";
        var OR = "OR";
        var LSHIFT = "LSHIFT";
        var RSHIFT = "RSHIFT";

        data.forEach(function(command){
            // Command patterns
            var powerToWire = /^(\d+) -> (\w+)/gi;
            var wireAndWireToWire = /^(\w+) (\w+) (\w+) -> (\w+)/gi;
            var notWireToWire = /^(\w+) (\w+) -> (\w+)/gi;
            var result;

            result = powerToWire.exec(command);
            if(powerToWire.lastIndex > 0){
                console.log( "power to wire" );
                // Toss the match
                result.shift();
                circuit[result[1]] = +result[0];
                return;
            }

            result = wireAndWireToWire.exec(command);
            if(wireAndWireToWire.lastIndex > 0){
                console.log( "wire command wire output" );
                // Toss the match
                result.shift();

                switch(result[1]){
                    case AND:
                        circuit[result[3]] = circuit[result[0]] & circuit[result[2]];
                    break;
                    case OR:
                        circuit[result[3]] = circuit[result[0]] | circuit[result[2]];
                    break;
                    case LSHIFT:
                        circuit[result[3]] = circuit[result[0]] << +result[2];
                    break;
                    case RSHIFT:
                        circuit[result[3]] = circuit[result[0]] >>> +result[2];
                    break;
                }
                return;
            }

            result = notWireToWire.exec(command);
            if(notWireToWire.lastIndex > 0){
                console.log( "not wire command" );
                // Toss the match
                result.shift();

                circuit[result[2]] = ~ circuit[result[1]];
                // Flip the value if it's negative
                if(circuit[result[2]] < 0){
                    circuit[result[2]] = 65536 + circuit[result[2]];
                }
                return;
            }
        });
        console.log( circuit );
	});
})();
