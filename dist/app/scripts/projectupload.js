$(function(){
	$(".allPro").click(function(e){
		$(".projectList").show();
		$(document).one("click",function(){
			$(".projectList").hide();
			
		});
		e.stopPropagation();
		
	});
	
})