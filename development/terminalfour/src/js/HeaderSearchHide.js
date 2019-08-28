
console.log('Script loaded - 9232015.3');
function hideAllSubNav(){
	$('#cause, #health, #stories, #research, #involved, #content-sub-nav, #content-sub-lower-wrapper, #content-sub-nav-lower-health, #content-sub-nav-lower-cause, #content-sub-nav-lower-stories, #content-sub-nav-lower-research, #content-sub-nav-lower-involved').hide();
	$('#nav-cause, #nav-health, #nav-stories, #nav-research, #nav-involved, #nav-admissions, #nav-academics, #nav-campus, #nav-athletics, #nav-hub, #nav-alumni, #nav-faculty, #nav-search').parent().removeClass('active-nav');
	$('#hero').css('margin-top','0');
}

hideAllSubNav();

/* Search Click Event */
$('#nav-search').click(function(){
	hideAllSubNav();
	$('#content-sub-nav').hide();
	$('#nav-cause, #nav-health, #nav-stories, #nav-research, #nav-involved, #nav-admissions, #nav-academics, #nav-campus, #nav-athletics, #nav-hub, #nav-alumni, #nav-faculty, #nav-search').fadeTo('fast', 0);
	setTimeout(function(){
		$('#search-input').fadeTo('fast', 1);
		$('#search-text').focus();
	}, 100);
});

$('#nav-search-close').click(function(){
	$('#search-input').hide();
	$('#nav-cause, #nav-health, #nav-stories, #nav-research, #nav-involved, #nav-admissions, #nav-academics, #nav-campus, #nav-athletics, #nav-hub, #nav-alumni, #nav-faculty, #nav-search').fadeTo('slow', 1);
});
