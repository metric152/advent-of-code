(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		var data = document.getElementById("instructions").value.split("\n");
        circuit = {};
        var getValueWorker = null;

        var AND = "AND";
        var OR = "OR";
        var LSHIFT = "LSHIFT";
        var RSHIFT = "RSHIFT";

        data.forEach(function(command){
            // Command patterns
            var powerToWire = /^(\w+) -> (\w+)/gi;
            var wireAndWireToWire = /^(\w+) (\w+) (\w+) -> (\w+)/gi;
            var notWireToWire = /^(\w+) (\w+) -> (\w+)/gi;
            var result;

            result = powerToWire.exec(command);
            if(powerToWire.lastIndex > 0){
                // console.log( "power to wire" );
                // Toss the match
                result.shift();

                // Check for num vs circuit position
                if(+result[0] >= 0){
                    circuit[result[1]] = {
                        get value(){
                            return +result[0];
                        }
                    };
                }
                else{
                    circuit[result[1]] = {
                        'val': null,
                        get value(){
                            if(this.val) return this.val;
                            this.val = circuit[result[0]].value;

                            return this.val;
                        }
                    }
                }

                return;
            }

            result = wireAndWireToWire.exec(command);
            if(wireAndWireToWire.lastIndex > 0){
                // console.log( "wire command wire output" );
                // Toss the match
                result.shift();

                switch(result[1]){
                    case AND:
                        circuit[result[3]] = {
                            'val': null,
                            get value (){
                                if(this.val) return this.val;

                                // If this is a number dont look up the value
                                if(+result[0]){
                                    this.val = +result[0] & circuit[result[2]].value;
                                    return this.val;
                                }
                                this.val = circuit[result[0]].value & circuit[result[2]].value;
                                return this.val;
                            }
                        };
                    break;
                    case OR:
                        circuit[result[3]] = {
                            'val': null,
                            get value(){
                                if(this.val) return this.val;

                                this.val = circuit[result[0]].value | circuit[result[2]].value;
                                return this.val;
                            }
                        };
                    break;
                    case LSHIFT:
                        circuit[result[3]] = {
                            'val': null,
                            get value(){
                                if(this.val) return this.val;

                                this.val = circuit[result[0]].value << +result[2];
                                return this.val;
                            }
                        }
                    break;
                    case RSHIFT:
                        circuit[result[3]] = {
                            'val': null,
                            get value(){
                                if(this.val) return this.val;

                                this.val = circuit[result[0]].value >>> +result[2];
                                return this.val;
                            }
                        }
                    break;
                }
                return;
            }

            result = notWireToWire.exec(command);
            if(notWireToWire.lastIndex > 0){
                // console.log( "not wire command" );
                // Toss the match
                result.shift();

                circuit[result[2]] = {
                    'val': null,
                    get value(){
                        if(this.val) return this.val;

                        var tmp;
                        tmp = ~circuit[result[1]].value;
                        // Flip the value if it's negative
                        if(tmp < 0){
                            tmp = 65536 + tmp;
                        }

                        this.val = tmp;
                        return this.val;
                    }
                }
                return;
            }
        });
        console.log( circuit );
	});
})();
