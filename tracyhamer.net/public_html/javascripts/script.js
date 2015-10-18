// JavaScript Document

$(document).ready(function() {
	
	$('#portImg1 .image-counters button').click(function(){
		$('#portImg1 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg1 img').attr('src', 'images/styleguide1.png');
				$('#portImg1 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg1 img').attr('src', 'images/styleguide2.png');
				$('#portImg1 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg1 img').attr('src', 'images/styleguide3.png');
				$('#portImg1 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg1 img').attr('src', 'images/styleguide4.png');
				$('#portImg1 .image-counters button#img4').addClass('active');
				break;
			case 'img5':
				$('#portImg1 img').attr('src', 'images/styleguide5.png');
				$('#portImg1 .image-counters button#img5').addClass('active');
				break;
			case 'img6':
				$('#portImg1 img').attr('src', 'images/styleguide6.png');
				$('#portImg1 .image-counters button#img6').addClass('active');
				break;
			case 'img7':
				$('#portImg1 img').attr('src', 'images/styleguide7.png');
				$('#portImg1 .image-counters button#img7').addClass('active');
				break;
		}
	});
	
	$('#portImg1 .image button').click(function(){
		$('#portImg1 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg1 .image img').attr('src')) {
				case 'images/styleguide1.png':
					$('#portImg1 img').attr('src', 'images/styleguide7.png');
					$('#portImg1 .image-counters button#img7').addClass('active');
					break;
				case 'images/styleguide2.png':
					$('#portImg1 img').attr('src', 'images/styleguide1.png');
					$('#portImg1 .image-counters button#img1').addClass('active');
					break;
				case 'images/styleguide3.png':
					$('#portImg1 img').attr('src', 'images/styleguide2.png');
					$('#portImg1 .image-counters button#img2').addClass('active');
					break;
				case 'images/styleguide4.png':
					$('#portImg1 img').attr('src', 'images/styleguide3.png');
					$('#portImg1 .image-counters button#img3').addClass('active');
					break;
				case 'images/styleguide5.png':
					$('#portImg1 img').attr('src', 'images/styleguide4.png');
					$('#portImg1 .image-counters button#img4').addClass('active');
					break;
				case 'images/styleguide6.png':
					$('#portImg1 img').attr('src', 'images/styleguide5.png');
					$('#portImg1 .image-counters button#img5').addClass('active');
					break;
				case 'images/styleguide7.png':
					$('#portImg1 img').attr('src', 'images/styleguide6.png');
					$('#portImg1 .image-counters button#img6').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg1 .image img').attr('src')) {
				case 'images/styleguide1.png':
					$('#portImg1 img').attr('src', 'images/styleguide2.png');
					$('#portImg1 .image-counters button#img2').addClass('active');
					break;
				case 'images/styleguide2.png':
					$('#portImg1 img').attr('src', 'images/styleguide3.png');
					$('#portImg1 .image-counters button#img3').addClass('active');
					break;
				case 'images/styleguide3.png':
					$('#portImg1 img').attr('src', 'images/styleguide4.png');
					$('#portImg1 .image-counters button#img4').addClass('active');
					break;
				case 'images/styleguide4.png':
					$('#portImg1 img').attr('src', 'images/styleguide5.png');
					$('#portImg1 .image-counters button#img5').addClass('active');
					break;
				case 'images/styleguide5.png':
					$('#portImg1 img').attr('src', 'images/styleguide6.png');
					$('#portImg1 .image-counters button#img6').addClass('active');
					break;
				case 'images/styleguide6.png':
					$('#portImg1 img').attr('src', 'images/styleguide7.png');
					$('#portImg1 .image-counters button#img7').addClass('active');
					break;
				case 'images/styleguide7.png':
					$('#portImg1 img').attr('src', 'images/styleguide1.png');
					$('#portImg1 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
	
	$('#portImg2 .image-counters button').click(function(){
		$('#portImg2 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg2 img').attr('src', 'images/c-preview.png');
				$('#portImg2 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg2 img').attr('src', 'images/c-mob_choose.png');
				$('#portImg2 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg2 img').attr('src', 'images/c-mob_checkout.png');
				$('#portImg2 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg2 img').attr('src', 'images/c-mob_review.png');
				$('#portImg2 .image-counters button#img4').addClass('active');
				break;
			case 'img5':
				$('#portImg2 img').attr('src', 'images/c-desk_choose.png');
				$('#portImg2 .image-counters button#img5').addClass('active');
				break;
			case 'img6':
				$('#portImg2 img').attr('src', 'images/c-desk_checkout.png');
				$('#portImg2 .image-counters button#img6').addClass('active');
				break;
			case 'img7':
				$('#portImg2 img').attr('src', 'images/c-desk_review.png');
				$('#portImg2 .image-counters button#img7').addClass('active');
				break;
		}
	});
	
	$('#portImg2 .image button').click(function(){
		$('#portImg2 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg2 .image img').attr('src')) {
				case 'images/c-preview.png':
					$('#portImg2 img').attr('src', 'images/c-desk_review.png');
					$('#portImg2 .image-counters button#img7').addClass('active');
					break;
				case 'images/c-mob_choose.png':
					$('#portImg2 img').attr('src', 'images/c-preview.png');
					$('#portImg2 .image-counters button#img1').addClass('active');
					break;
				case 'images/c-mob_checkout.png':
					$('#portImg2 img').attr('src', 'images/c-mob_choose.png');
					$('#portImg2 .image-counters button#img2').addClass('active');
					break;
				case 'images/c-mob_review.png':
					$('#portImg2 img').attr('src', 'images/c-mob_checkout.png');
					$('#portImg2 .image-counters button#img3').addClass('active');
					break;
				case 'images/c-desk_choose.png':
					$('#portImg2 img').attr('src', 'images/c-mob_review.png');
					$('#portImg2 .image-counters button#img4').addClass('active');
					break;
				case 'images/c-desk_checkout.png':
					$('#portImg2 img').attr('src', 'images/c-desk_choose.png');
					$('#portImg2 .image-counters button#img5').addClass('active');
					break;
				case 'images/c-desk_review.png':
					$('#portImg2 img').attr('src', 'images/c-desk_checkout.png');
					$('#portImg2 .image-counters button#img6').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg2 .image img').attr('src')) {
				case 'images/c-preview.png':
					$('#portImg2 img').attr('src', 'images/c-mob_choose.png');
					$('#portImg2 .image-counters button#img2').addClass('active');
					break;
				case 'images/c-mob_choose.png':
					$('#portImg2 img').attr('src', 'images/c-mob_checkout.png');
					$('#portImg2 .image-counters button#img3').addClass('active');
					break;
				case 'images/c-mob_checkout.png':
					$('#portImg2 img').attr('src', 'images/c-mob_review.png');
					$('#portImg2 .image-counters button#img4').addClass('active');
					break;
				case 'images/c-mob_review.png':
					$('#portImg2 img').attr('src', 'images/c-desk_choose.png');
					$('#portImg2 .image-counters button#img5').addClass('active');
					break;
				case 'images/c-desk_choose.png':
					$('#portImg2 img').attr('src', 'images/c-desk_checkout.png');
					$('#portImg2 .image-counters button#img6').addClass('active');
					break;
				case 'images/c-desk_checkout.png':
					$('#portImg2 img').attr('src', 'images/c-desk_review.png');
					$('#portImg2 .image-counters button#img7').addClass('active');
					break;
				case 'images/c-desk_review.png':
					$('#portImg2 img').attr('src', 'images/c-preview.png');
					$('#portImg2 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});

$('#portImg3 .image-counters button').click(function(){
		$('#portImg3 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg3 img').attr('src', 'images/intCharts-pie.png');
				$('#portImg3 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg3 img').attr('src', 'images/intCharts-pieFly.png');
				$('#portImg3 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg3 img').attr('src', 'images/intCharts-bar.png');
				$('#portImg3 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg3 img').attr('src', 'images/intCharts-barFly.png');
				$('#portImg3 .image-counters button#img4').addClass('active');
				break;
			case 'img5':
				$('#portImg3 img').attr('src', 'images/intCharts-barHover.png');
				$('#portImg3 .image-counters button#img5').addClass('active');
				break;
			case 'img6':
				$('#portImg3 img').attr('src', 'images/intCharts-barBlueOnly.png');
				$('#portImg3 .image-counters button#img6').addClass('active');
				break;
		}
	});
	
	$('#portImg3 .image button').click(function(){
		$('#portImg3 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg3 .image img').attr('src')) {
				case 'images/intCharts-pie.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barBlueOnly.png');
					$('#portImg3 .image-counters button#img6').addClass('active');
					break;
				case 'images/intCharts-pieFly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-pie.png');
					$('#portImg3 .image-counters button#img1').addClass('active');
					break;
				case 'images/intCharts-bar.png':
					$('#portImg3 img').attr('src', 'images/intCharts-pieFly.png');
					$('#portImg3 .image-counters button#img2').addClass('active');
					break;
				case 'images/intCharts-barFly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-bar.png');
					$('#portImg3 .image-counters button#img3').addClass('active');
					break;
				case 'images/intCharts-barHover.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barFly.png');
					$('#portImg3 .image-counters button#img4').addClass('active');
					break;
				case 'images/intCharts-barBlueOnly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barHover.png');
					$('#portImg3 .image-counters button#img5').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg3 .image img').attr('src')) {
				case 'images/intCharts-pie.png':
					$('#portImg3 img').attr('src', 'images/intCharts-pieFly.png');
					$('#portImg3 .image-counters button#img2').addClass('active');
					break;
				case 'images/intCharts-pieFly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-bar.png');
					$('#portImg3 .image-counters button#img3').addClass('active');
					break;
				case 'images/intCharts-bar.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barFly.png');
					$('#portImg3 .image-counters button#img4').addClass('active');
					break;
				case 'images/intCharts-barFly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barHover.png');
					$('#portImg3 .image-counters button#img5').addClass('active');
					break;
				case 'images/intCharts-barHover.png':
					$('#portImg3 img').attr('src', 'images/intCharts-barBlueOnly.png');
					$('#portImg3 .image-counters button#img6').addClass('active');
					break;
				case 'images/intCharts-barBlueOnly.png':
					$('#portImg3 img').attr('src', 'images/intCharts-pie.png');
					$('#portImg3 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
	
	$('#portImg4 .image-counters button').click(function(){
		$('#portImg4 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg4 img').attr('src', 'images/vgar-getStarted.png');
				$('#portImg4 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg4 img').attr('src', 'images/vgar-genReqs.png');
				$('#portImg4 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg4 img').attr('src', 'images/vgar-intReqs.png');
				$('#portImg4 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg4 img').attr('src', 'images/vgar-search.png');
				$('#portImg4 .image-counters button#img4').addClass('active');
				break;
		}
	});
	
	$('#portImg4 .image button').click(function(){
		$('#portImg4 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg4 .image img').attr('src')) {
				case 'images/vgar-getStarted.png':
					$('#portImg4 img').attr('src', 'images/vgar-search.png');
					$('#portImg4 .image-counters button#img4').addClass('active');
					break;
				case 'images/vgar-genReqs.png':
					$('#portImg4 img').attr('src', 'images/vgar-getStarted.png');
					$('#portImg4 .image-counters button#img1').addClass('active');
					break;
				case 'images/vgar-intReqs.png':
					$('#portImg4 img').attr('src', 'images/vgar-genReqs.png');
					$('#portImg4 .image-counters button#img2').addClass('active');
					break;
				case 'images/vgar-search.png':
					$('#portImg4 img').attr('src', 'images/vgar-intReqs.png');
					$('#portImg4 .image-counters button#img3').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg4 .image img').attr('src')) {
				case 'images/vgar-getStarted.png':
					$('#portImg4 img').attr('src', 'images/vgar-genReqs.png');
					$('#portImg4 .image-counters button#img2').addClass('active');
					break;
				case 'images/vgar-genReqs.png':
					$('#portImg4 img').attr('src', 'images/vgar-intReqs.png');
					$('#portImg4 .image-counters button#img3').addClass('active');
					break;
				case 'images/vgar-intReqs.png':
					$('#portImg4 img').attr('src', 'images/vgar-search.png');
					$('#portImg4 .image-counters button#img4').addClass('active');
					break;
				case 'images/vgar-search.png':
					$('#portImg4 img').attr('src', 'images/vgar-getStarted.png');
					$('#portImg4 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
	
	$('#portImg5 .image-counters button').click(function(){
		$('#portImg5 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg5 img').attr('src', 'images/vat-dashboard.png');
				$('#portImg5 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg5 img').attr('src', 'images/vat-video.png');
				$('#portImg5 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg5 img').attr('src', 'images/vat-test.png');
				$('#portImg5 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg5 img').attr('src', 'images/vat-testOverlay.png');
				$('#portImg5 .image-counters button#img4').addClass('active');
				break;
			case 'img5':
				$('#portImg5 img').attr('src', 'images/vat-dashboardComplete.png');
				$('#portImg5 .image-counters button#img5').addClass('active');
				break;
		}
	});
	
	$('#portImg5 .image button').click(function(){
		$('#portImg5 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg5 .image img').attr('src')) {
				case 'images/vat-dashboard.png':
					$('#portImg5 img').attr('src', 'images/vat-dashboardComplete.png');
					$('#portImg5 .image-counters button#img5').addClass('active');
					break;
				case 'images/vat-video.png':
					$('#portImg5 img').attr('src', 'images/vat-dashboard.png');
					$('#portImg5 .image-counters button#img1').addClass('active');
					break;
				case 'images/vat-test.png':
					$('#portImg5 img').attr('src', 'images/vat-video.png');
					$('#portImg5 .image-counters button#img2').addClass('active');
					break;
				case 'images/vat-testOverlay.png':
					$('#portImg5 img').attr('src', 'images/vat-test.png');
					$('#portImg5 .image-counters button#img3').addClass('active');
					break;
				case 'images/vat-dashboardComplete.png':
					$('#portImg5 img').attr('src', 'images/vat-testOverlay.png');
					$('#portImg5 .image-counters button#img4').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg5 .image img').attr('src')) {
				case 'images/vat-dashboard.png':
					$('#portImg5 img').attr('src', 'images/vat-video.png');
					$('#portImg5 .image-counters button#img2').addClass('active');
					break;
				case 'images/vat-video.png':
					$('#portImg5 img').attr('src', 'images/vat-test.png');
					$('#portImg5 .image-counters button#img3').addClass('active');
					break;
				case 'images/vat-test.png':
					$('#portImg5 img').attr('src', 'images/vat-testOverlay.png');
					$('#portImg5 .image-counters button#img4').addClass('active');
					break;
				case 'images/vat-testOverlay.png':
					$('#portImg5 img').attr('src', 'images/vat-dashboardComplete.png');
					$('#portImg5 .image-counters button#img5').addClass('active');
					break;
				case 'images/vat-dashboardComplete.png':
					$('#portImg5 img').attr('src', 'images/vat-dashboard.png');
					$('#portImg5 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
	
	$('#portImg6 .image-counters button').click(function(){
		$('#portImg6 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg6 img').attr('src', 'images/mobileTest1.png');
				$('#portImg6 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg6 img').attr('src', 'images/mobileTest2.png');
				$('#portImg6 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg6 img').attr('src', 'images/mobileTest3.png');
				$('#portImg6 .image-counters button#img3').addClass('active');
				break;
			case 'img4':
				$('#portImg6 img').attr('src', 'images/mobileTest4.png');
				$('#portImg6 .image-counters button#img4').addClass('active');
				break;
			case 'img5':
				$('#portImg6 img').attr('src', 'images/mobileTest5.png');
				$('#portImg6 .image-counters button#img5').addClass('active');
				break;
			case 'img6':
				$('#portImg6 img').attr('src', 'images/mobileTest6.png');
				$('#portImg6 .image-counters button#img6').addClass('active');
				break;
			case 'img7':
				$('#portImg6 img').attr('src', 'images/mobileTest7.png');
				$('#portImg6 .image-counters button#img7').addClass('active');
				break;
		}
	});
	
	$('#portImg6 .image button').click(function(){
		$('#portImg6 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg6 .image img').attr('src')) {
				case 'images/mobileTest1.png':
					$('#portImg6 img').attr('src', 'images/mobileTest7.png');
					$('#portImg6 .image-counters button#img7').addClass('active');
					break;
				case 'images/mobileTest2.png':
					$('#portImg6 img').attr('src', 'images/mobileTest1.png');
					$('#portImg6 .image-counters button#img1').addClass('active');
					break;
				case 'images/mobileTest3.png':
					$('#portImg6 img').attr('src', 'images/mobileTest2.png');
					$('#portImg6 .image-counters button#img2').addClass('active');
					break;
				case 'images/mobileTest4.png':
					$('#portImg6 img').attr('src', 'images/mobileTest3.png');
					$('#portImg6 .image-counters button#img3').addClass('active');
					break;
				case 'images/mobileTest5.png':
					$('#portImg6 img').attr('src', 'images/mobileTest4.png');
					$('#portImg6 .image-counters button#img4').addClass('active');
					break;
				case 'images/mobileTest6.png':
					$('#portImg6 img').attr('src', 'images/mobileTest5.png');
					$('#portImg6 .image-counters button#img5').addClass('active');
					break;
				case 'images/mobileTest7.png':
					$('#portImg6 img').attr('src', 'images/mobileTest6.png');
					$('#portImg6 .image-counters button#img6').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg6 .image img').attr('src')) {
				case 'images/mobileTest1.png':
					$('#portImg6 img').attr('src', 'images/mobileTest2.png');
					$('#portImg6 .image-counters button#img2').addClass('active');
					break;
				case 'images/mobileTest2.png':
					$('#portImg6 img').attr('src', 'images/mobileTest3.png');
					$('#portImg6 .image-counters button#img3').addClass('active');
					break;
				case 'images/mobileTest3.png':
					$('#portImg6 img').attr('src', 'images/mobileTest4.png');
					$('#portImg6 .image-counters button#img4').addClass('active');
					break;
				case 'images/mobileTest4.png':
					$('#portImg6 img').attr('src', 'images/mobileTest5.png');
					$('#portImg6 .image-counters button#img5').addClass('active');
					break;
				case 'images/mobileTest5.png':
					$('#portImg6 img').attr('src', 'images/mobileTest6.png');
					$('#portImg6 .image-counters button#img6').addClass('active');
					break;
				case 'images/mobileTest6.png':
					$('#portImg6 img').attr('src', 'images/mobileTest7.png');
					$('#portImg6 .image-counters button#img7').addClass('active');
					break;
				case 'images/mobileTest7.png':
					$('#portImg6 img').attr('src', 'images/mobileTest1.png');
					$('#portImg6 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
	
	$('#portImg7 .image-counters button').click(function(){
		$('#portImg7 .image-counters button').removeClass('active');
		
		switch($(this).attr('id')){
			case 'img1':
				$('#portImg7 img').attr('src', 'images/firetip-login.png');
				$('#portImg7 .image-counters button#img1').addClass('active');
				break;
			case 'img2':
				$('#portImg7 img').attr('src', 'images/firetip-trades.png');
				$('#portImg7 .image-counters button#img2').addClass('active');
				break;
			case 'img3':
				$('#portImg7 img').attr('src', 'images/firetip-order.png');
				$('#portImg7 .image-counters button#img3').addClass('active');
				break;
		}
	});
	
	$('#portImg7 .image button').click(function(){
		$('#portImg7 .image-counters button').removeClass('active');
		
		if($(this).attr('id') === 'prev'){
			switch($('#portImg7 .image img').attr('src')) {
				case 'images/firetip-login.png':
					$('#portImg7 img').attr('src', 'images/firetip-order.png');
					$('#portImg7 .image-counters button#img3').addClass('active');
					break;
				case 'images/firetip-trades.png':
					$('#portImg7 img').attr('src', 'images/firetip-login.png');
					$('#portImg7 .image-counters button#img1').addClass('active');
					break;
				case 'images/firetip-order.png':
					$('#portImg7 img').attr('src', 'images/firetip-trades.png');
					$('#portImg7 .image-counters button#img2').addClass('active');
					break;
			}
		}
		
		if($(this).attr('id') === 'nxt'){
			switch($('#portImg7 .image img').attr('src')) {
				case 'images/firetip-login.png':
					$('#portImg7 img').attr('src', 'images/firetip-trades.png');
					$('#portImg7 .image-counters button#img2').addClass('active');
					break;
				case 'images/firetip-trades.png':
					$('#portImg7 img').attr('src', 'images/firetip-order.png');
					$('#portImg7 .image-counters button#img3').addClass('active');
					break;
				case 'images/firetip-order.png':
					$('#portImg7 img').attr('src', 'images/firetip-login.png');
					$('#portImg7 .image-counters button#img1').addClass('active');
					break;
			}
		}
	});
});