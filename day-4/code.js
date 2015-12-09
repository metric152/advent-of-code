(function(){
    document.getElementById("submit").addEventListener("click", function(event){
        var key = document.getElementById("key").value;
        /**
        * MD5 program
        * https://github.com/blueimp/JavaScript-MD5
        *
        * Set up a web worker to crank through all the posibilities
        * https://github.com/cdsanchez/SimpleWorker
        * See if you can skip numbers by groups of 100 then work back if you hit it
        * NOTES
        * Doesn't use the entire Q chain (reject, notify)
        * Needs a way to stop the worker
        **/
        var worker = SimpleWorker(function(start, finish, key){
            var result = "";

            for(var i = start; i < finish; i = i + 2){
                result = md5(key + i);

                if(result.indexOf('000000') == 0){
                    return "index is: " + i;
                }
            }
            return "not found";
        },['http://advent-of-code.io:8888/day-4/bower_components/blueimp-md5/js/md5.min.js',
           'http://advent-of-code.io:8888/day-4/bower_components/q/q.js']);

        var worker1 = worker(0, 20000000, key);
        worker1.then(function(response){
            console.log(response);
        }, function(response){
            console.log( "an error occured" );
        }, function(msg){
            console.log(msg);
        });

        var worker2 = worker(1, 20000000, key);
        worker2.then(function(response){
            console.log(response);
        }, function(response){
            console.log( "an error occured" );
        }, function(msg){
            console.log(msg);
        });
    });
})();
