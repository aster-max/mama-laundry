$(document).ready(function(){
	$('.nav-sidebar .open-btn').click(function(){
	//	$('.notification').removeClass("hide");
	//	$('.notification').addClass("show");
	//	$('.notification').toggleClass("hide show")
	//	$('.notification').addClass("show-popup");	

	//	success
	//	$('.notification').find('.notif-bar .msg-notif').text("Success: your current issue have been reported!");
	//	$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;')		
	//	$('.notification').find('.notif-bar .msg-notif').append('&nbsp;')
	//	$('.notification').css('background','rgba(54,179,122,0.7)');
	//	$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-check-circle")
	//	$('.notification').find('.notif-bar .close-notif').css('background','rgba(54,179,122,0.9)');

	//	warning
	//	$('.notification').find('.notif-bar .msg-notif').text("Warning: it seems that you haven't write the issue yet?");
	//	$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;')		
	//	$('.notification').find('.notif-bar .msg-notif').append('&nbsp;')
	//	$('.notification').css('background','rgb(168,173,27,0.7)');
	//	$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-exclamation-circle")
	//	$('.notification').find('.notif-bar .close-notif').css('background','rgb(168,173,27,0.9)');

	//	error
	//	$('.notification').find('.notif-bar .msg-notif').text("Error: make sure to upload the file in pdf format only!");
	//	$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;');		
	//	$('.notification').find('.notif-bar .msg-notif').append('&nbsp;');
	//	$('.notification').css('background','rgb(173,50,83,0.7)');
	//	$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-times-circle")
	//	$('.notification').find('.notif-bar .close-notif').css('background','rgb(173,50,83,0.9)');

		$('.nav-sidebar').find('.open-btn i').toggleClass("fa-bug fa-times");		
		$('.nav-sidebar .open-btn .nav-item .fa-bug').css('color','#FFFFFF');		
		

		$('.report-sidebar').toggleClass('hide show')
		$('.report-sidebar.hide').css('display','block');		


	//	$('.report-sidebar').removeClass("hide");
	//	$('.report-sidebar').addClass("show");
	//	$('.report-sidebar').addClass("show-popup");					

	});

	$('.notification .notif-bar .close-notif').click(function(){
		$('.notification').addClass("hide")
		$('.notification').removeClass("show")			
	});	

	$('.nav-sidebar .open-btn .nav-item .fa-bug').click(function(){
		$('.nav-sidebar .open-btn .nav-item .fa-bug').css('color','#FFE2E3');
	});

	$('.nav-sidebar .open-btn .nav-item .fa-bug').hover(function(){
		$('.nav-sidebar .open-btn .nav-item .fa-bug').css('color','#FDFAC6');
	},function(){		
		$('.nav-sidebar .open-btn .nav-item .fa-bug').css('color','#FFFFFF');
	});

});