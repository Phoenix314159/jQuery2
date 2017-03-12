myApp.service('service1',function () {
    this.dude = [1,2,3,4,5,4,3];
    this.add = function(index){
        this.dude[index] += 1;
    }
    this.sum = function(){

      return this.dude.reduce(function(a,b){
            return a+b;
        });
    }
});