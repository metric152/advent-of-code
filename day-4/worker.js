self.addEventListener('message', function(message){
    var data = message.data;

    self.postMessage(data + 1);
});
