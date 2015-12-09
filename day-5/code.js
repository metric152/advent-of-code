(function(){
	document.getElementById("submit").addEventListener("click", function(event){
		// Break into array of strings
		var data = document.getElementById("instructions").value.split('\n');
		/**
		 * Regular expression cheat sheet
		 * http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
		 */
		// Contains at least 3 vowels
		var rule1 = /(?:[aeiou]){3,}/i;
		
		data.forEach(function(str){
			// Test rule 1
			console.log( str.match(rule1) );
		});
	});
})();