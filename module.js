var Basket = ( function() {
  var obj = {
    name : "Basket",

    list : [],
    
    add : function(name)
    {
    	this.list.push({name : name})
    },
    
    remove : function()
    {
    	return this.isEmpty()? false :  this.list.pop();
    },
    
    isEmpty : function()
    {
    	return !this.list.length ? true : false ;
    },
  }

  obj.info = function(){
      log() 
    }
  
  log  = function log(){console.log('Private method')}
  
  return obj;

})();

Basket.add('Keyword');
console.log(Basket.list);
console.log(Basket.isEmpty());
console.log(Basket.remove());
console.log(Basket.remove());