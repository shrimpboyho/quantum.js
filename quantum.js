// Custom Extension of jQuery

(function ( $ ) {
$.fn.injectHTML = function(injectthishtml) {
  
    for (var i = 0; i < this.get().length; i++) {
      
        var mydoc = this.get(i).contentWindow.document;
  	mydoc.open();
		mydoc.write(injectthishtml); 
		mydoc.close();
        
    }
      
    // Allow daisy chaining
    return this;
}
$.fn.$ = function(query) {
  
    return $(this).contents().find(query);
    
}
}( jQuery ));
