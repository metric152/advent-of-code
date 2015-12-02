(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        // Break into array
        var data = document.getElementById("instructions").value.split("\n");
        var presents = [];
        var total = 0;

        // Loop through presents
        data.forEach(function(dimensions){
            var tmp = dimensions.split("x");
            var present = {
                'l': +tmp[0],
                'w': +tmp[1],
                'h': +tmp[2],
                'total': 0
            };
            var smallestSide = 0;

            // Calculate surface area of each side
            present.sides = [(present.l * present.w), (present.w * present.h),(present.h * present.l)];

            // Get surface area of the present
            present.sides.map(function(val){
                present.total += 2 * val;
            });

            // Add the smallest side
            present.total += Math.min.apply(null, present.sides);

            // Add present to the array
            presents.push(present);

            // Add to overall total
            total += present.total;
        });
        alert("Paper required:" + total);
    });
})();
