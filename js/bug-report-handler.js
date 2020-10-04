$(document).ready(function(){
	$('.report-sidebar .submit').click(function(){
		if (($('.report-sidebar .nickname').val().length >= 3) && ($('.report-sidebar .email').val().length >= 5) && ($('.report-sidebar .area').val().length >= 5)) { 
			if (($('.report-sidebar .email').val().indexOf('@') > -1) && ($('.report-sidebar .email').val().indexOf('.') > -1)) {
				$('.report-sidebar').toggleClass('show hide');
				$('.report-sidebar.hide').css('display','block');				
				$('.nav-sidebar').find('.open-btn i').toggleClass("fa-bug fa-times");		
				$('.nav-sidebar .open-btn .nav-item .fa-bug').css('color','#FFFFFF');		

				$('.notification').toggleClass("hide show");
				$('.notification').addClass("show-popup");			

			//	success
				$('.notification').find('.notif-bar .msg-notif').text("Success: your current issue have been reported!");
				$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;')		
				$('.notification').find('.notif-bar .msg-notif').append('&nbsp;')
				$('.notification').css('background','rgba(54,179,122,0.7)');
				$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-check-circle")
				$('.notification').find('.notif-bar .close-notif').css('background','rgba(54,179,122,0.9)');

				$('.report-sidebar').find('input, textarea').val('');
				$('.report-sidebar').find('.submit').val('submit');

				setTimeout(function(){
					$('.notification').addClass("hide");
					$('.notification').removeClass("show");	
				},5000)	
			} else {
			//	warning
				$('.notification').toggleClass("hide show");
				$('.notification').addClass("show-popup");			

				$('.notification').find('.notif-bar .msg-notif').text("Warning: please use the correct email address!");
				$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;')		
				$('.notification').find('.notif-bar .msg-notif').append('&nbsp;')
				$('.notification').css('background','rgb(168,173,27,0.7)');
				$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-exclamation-circle")
				$('.notification').find('.notif-bar .close-notif').css('background','rgb(168,173,27,0.9)');

				setTimeout(function(){
					$('.notification').addClass("hide");
					$('.notification').removeClass("show");	
				},5000)					
			}
		} else {
		//	warning
			$('.notification').toggleClass("hide show");
			$('.notification').addClass("show-popup");			

			$('.notification').find('.notif-bar .msg-notif').text("Warning: all fields are mandatory. please report it properly!");
			$('.notification').find('.notif-bar .msg-notif').prepend('&nbsp;')		
			$('.notification').find('.notif-bar .msg-notif').append('&nbsp;')
			$('.notification').css('background','rgb(168,173,27,0.7)');
			$('.notification').find('.notif-bar .sym-notif i').addClass("fas fa-exclamation-circle")
			$('.notification').find('.notif-bar .close-notif').css('background','rgb(168,173,27,0.9)');

			setTimeout(function(){
				$('.notification').addClass("hide");
				$('.notification').removeClass("show");	
			},5000)					
		}
	});

	//if ($('.report-sidebar .nickname').val().length === 2) {}
});