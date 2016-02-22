var $ = require('jQuery');


$(function(){

var allPanels = $('.accordion ul').hide();
console.log(allPanels);

$('.accordion a').click(function(){
	allPanels.slideUp();

	$('.green').removeClass('green');
  	$(this).parent().parent().addClass('green');
	$(this).parent().next().slideDown();
	return false;
});


  


});


//.animate()