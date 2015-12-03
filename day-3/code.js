(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        var location = {
            'x': 0,
            'y': 0,
            'deliveries': {},
            'total': 0,

            get location(){
                return this.x + '|' + this.y;
            },

            'delivery': function(){
                if(this.delivery[this.location]){
                    this.delivery[this.location]++;
                }
                else{
                    this.delivery[this.location] = 1;
                    this.total++;
                }
            }
        };
        // Read in directions
        var data = document.getElementById("instructions").value;

        // Mark the first delivery
        location.delivery();

        for(var i = 0; i < data.length ; i++){
            // Move to the correct location
            switch(data[i]){
                case '^':
                    location.y++;
                    location.delivery();
                    break;
                case 'v':
                    location.y--;
                    location.delivery();
                    break;
                case '>':
                    location.x++;
                    location.delivery();
                    break;
                case '<':
                    location.x--;
                    location.delivery();
                    break;
            }
        }
        alert(location.total);
    });
})();
