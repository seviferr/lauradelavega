
$('a.smooth').click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
});

$("#contactForm").submit(function (e) {
	var form = $(this);
	$.ajax(
	{
		url: "mailer.php", 
		data: form.serialize(),
		success: function(result){
			$('.feedback').css('display', 'none');

			if(result === 'OK') {
				$(".feedback-ok").css("display", "block");				
				form[0].reset();
			}else if(result === 'KO') {
				$(".feedback-ko").css("display", "block");
			}
		}
	});

})