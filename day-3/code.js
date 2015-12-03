(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        function Santa(deliveries){
            this.x = 0;
            this.y = 0;
            var map = deliveries;

            this.getLocation = function(){
                return this.x + '|' + this.y;
            }

            this.delivery = function(){
                if(map[this.getLocation()]){
                    map[this.getLocation()]++;
                }
                else{
                    map[this.getLocation()] = 1;
                    map.total++;
                }
            }
        }

        // Read in directions
        var data = document.getElementById("instructions").value;
        var deliveries = {'total': 0};
        var santa = new Santa(deliveries);
        var roboSanta = new Santa(deliveries);
        var currentSanta = null;

        // Mark the first deliveries
        santa.delivery();
        roboSanta.delivery();

        for(var i = 0; i < data.length ; i++){
            currentSanta = i % 2 ? santa : roboSanta;
            // Move to the correct location
            switch(data[i]){
                case '^':
                    currentSanta.y++;
                    currentSanta.delivery();
                    break;
                case 'v':
                    currentSanta.y--;
                    currentSanta.delivery();
                    break;
                case '>':
                    currentSanta.x++;
                    currentSanta.delivery();
                    break;
                case '<':
                    currentSanta.x--;
                    currentSanta.delivery();
                    break;
            }
        }
        alert(deliveries.total);
    });
})();
