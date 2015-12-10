(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		// Break into array of strings
		var data = document.getElementById("instructions").value.split('\n');
        var rule1 = /([aeiou])/gi;
        var rule2 = /(\w)\1+/gi;
        var rule3 = /(ab)+|(cd)+|(pq)+|(xy)+/gi;
        var total = 0;
		/**
		 * Regular expression cheat sheet
		 * http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
         * https://regex101.com/#javascript
		 */
		// Contains at least 3 vowels
		data.forEach(function(str){
            var result1, result2, result3;

			// Test rule 1
            result1 = str.match(rule1);
			if(!result1 || result1.length < 3){
                // console.log( "rule 1 failed" );
                return;
            }
            // console.log( "rule 1 passed" );

            result2 = str.match(rule2);
            if(!result2){
                // console.log( "rule 2 failed" );
                return;
            }
            // console.log( "rule 2 passed" );

            result3 = str.match(rule3);
            if(result3){
                // console.log( "rule 3 failed" );
                return;
            }
            // console.log( "rule 3 passed" );

            total++;
		});
        console.log( total );
	});
})();
