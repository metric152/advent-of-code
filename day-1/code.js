(function(){
    document.getElementById("submit").addEventListener("click", function(event){
	var data = document.getElementById("instructions").value;
    var floor = 0;
    var basementFound = false;

    for(var i = 0; i < data.length; i++){
        //console.log("index:",i," floor:", floor);
        switch(data[i]){
            case "(":
                floor++;
                break;
            case ")":
                floor--;

                // Check for basement
                if(floor == -1 && !basementFound){
                  alert("basement position: " + (i+1) );
                  basementFound = true;
                }
                break;
            default:
                break;
        }
      }

        alert("ending floor:" + floor);
    })
})();
