var modern = (function($, modernModule){

	$.fn.modern = $.fn.modern || function(moduleName,functionName,param){
		if(functionName){
			modernModule[moduleName][functionName](this,param);
		} else {
			modernModule[moduleName](this,param);
		}
	};

	modernModule.modal = {
		show: function($this){
			$this.addClass('showing').before('<div class="modal-backdrop"></div>').prev('.modal-backdrop').on('click',function(){
				$this.modern('modal','hide');
			});
		},
		hide: function($this){
			$this.removeClass('showing').prev('.modal-backdrop').off().remove();
		}
	}

	return modernModule;

}(jQuery, modern || {}));