(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        // Break into array
        var data = document.getElementById("instructions").value.split("\n");
        var presents = [];
        var total = 0;
        var ribbon = 0;

        // Loop through presents
        data.forEach(function(dimensions){
            var tmp = dimensions.split("x");
            var present = {
                'l': +tmp[0],
                'w': +tmp[1],
                'h': +tmp[2],
                'total': 0,
                'ribbon': 0
            };
            var smallest = 0;

            // Calculate surface area of each side
            present.sides = [(present.l * present.w), (present.w * present.h), (present.h * present.l)];

            // Get surface area of the present
            present.sides.map(function(val){
                present.total += 2 * val;
            });

            // Add the smallest side
            smallest = Math.min.apply(null, present.sides);
            present.total += smallest;

            // Figure out the ribbon
            switch(present.sides.indexOf(smallest)){
                case 0:
                    present.ribbon = present.l + present.l + present.w + present.w + (present.l * present.w * present.h);
                    break;
                case 1:
                    present.ribbon = present.w + present.w + present.h + present.h + (present.l * present.w * present.h);
                    break;
                case 2:
                    present.ribbon = present.h + present.h + present.l + present.l + (present.l * present.w * present.h);
                    break;
                default:
                    break;
            }

            // Add present to the array
            presents.push(present);

            // Add to overall total
            total += present.total;

            // Add to overall ribbon
            ribbon += present.ribbon;
        });
        alert("Paper required:" + total + " ribbon:" + ribbon);
    });
})();
