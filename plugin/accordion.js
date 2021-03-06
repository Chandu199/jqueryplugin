(function($){
  var methods  = {
    init : function(options){
       var settings = $.extend({},$.fn.accordion.defaults, options);
    
      this.find("h3")
      .addClass("header")
      .next()
      .addClass("panel")
      .slideUp();
    
    var $this = this;
    this.on('click',".header",function(e){
        var next = $(e.target).next();
      var isActive = next.attr('data-active');
      if(settings.distinct){
        $this.find("[data-active]")
        .removeAttr("data-active")
        .slideToggle();
        
        if(isActive){
          return;
        }
      }
      next.attr('data-active',true)
      .slideToggle();
    });
    
    return this;
    },
    expand : function(){
      this.find('.panel').attr('data-active',true).slideDown();
    return this;
  },
  collapse : function(){
    this.find('[data-active]').removeAttr('data-active',true).slideUp();
    
   return this; 
  }
    
  };
  
  
  $.fn.accordion = function(options){
    if(methods[options]){
     return  methods[options].call(this);
    }
    return methods.init.call(this,options);
  };
  $.fn.accordion.defaults = {
    distinct: false
  }
  
}(jQuery));