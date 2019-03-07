$(document).ready(function(){
	 var itemCount = 0;

	 $('.add').click(function (){
	  itemCount ++;
	  $('#totalItems').html(itemCount);
	      $(this).siblings('.itemDetails').clone().appendTo( "#cartItems" ).append('<button class="btn btn-danger removeItem">Remove Item</button>');
      
	  }); 
	  
		$('#cartItems').on('click', '.removeItem', function(){
		$(this).parent().remove();  
		itemCount --;
		 if(itemCount==0){
			 $('#cartItems').text('There are no items in cart');
		 }
		$('#totalItems').html(itemCount);
	    });
        
		
		$('#cart').click(function(){
			 if(itemCount==0){
			 $('#cartItems').text('There are no items in cart');
				 $('.backdroop').toggle(1000);
			 }else $('.backdroop').toggle(1000);
		});

		
});

