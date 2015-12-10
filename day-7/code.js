(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		var data = document.getElementById("instructions").value.split("\n");
        var circuit = {};

        data.forEach(function(command){
            // Command patterns
            var powerToWire = /(\d+) -> (\w+)/gi;
            var wireAndWireToWire = /(\w+) (\w+) (\w+) -> (\w+)/gi;
            var notWireToWire = /(\w+) (\w+) -> (\w+)/gi;

            powerToWire.exec(command);
            if(powerToWire.lastIndex > 0){
                console.log( "power to wire" );
                return;
            }

            wireAndWireToWire.exec(command);
            if(wireAndWireToWire.lastIndex > 0){
                console.log( "wire command wire output" );
                return;
            }

            notWireToWire.exec(command);
            if(notWireToWire.lastIndex > 0){
                console.log( "not wire command" );
                return;
            }
        });
	});
})();
