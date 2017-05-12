$(function(){
	$(".close").click(function(){

		if($(".myInp input").attr('disabled') == 'disabled'){
			$(".myInp input").removeAttr('disabled');
			$(".close").attr("src","images/common/open.png");
			$(".close").css("margin-left","89%");
		}else{
			$(".myInp input").attr('disabled','disabled');
			$(".close").attr("src","images/common/lock.png");
			$(".close").css("margin-left","90%");
		}
		if($(".myInp textarea").attr('disabled') == 'disabled'){
			$(".myInp textarea").removeAttr('disabled');
		}else{
			$(".myInp textarea").attr('disabled','disabled');
		}
	});

	$(".my1").click(function(){
		$(".con1").css("display","block");
		$(".con2").css("display","none");
		$(".my1").css("color","#00a0ff");
		$(".my1").css("border-bottom","2px solid #00a0e9");
		$(".my2").css("color","#959595");
		$(".my2").css("border-bottom","2px solid #e0e0e0");
	})
	$(".my2").click(function(){
		$(".con2").css("display","block");
		$(".con1").css("display","none");
		$(".my2").css("color","#00a0ff");
		$(".my2").css("border-bottom","2px solid #00a0e9");
		$(".my1").css("color","#959595");
		$(".my1").css("border-bottom","2px solid #e0e0e0");
	})

	$(".slide").click(function(){
		$(".myInp").slideToggle();
	})
	$("#demo1").xb_scroll();
	$("#demo2").xb_scroll();
	$(".addBtn1").click(function(){
		if($(".addCon1").val() == ""){
			alert("评论内容不能为空");
		}else{
			var discuss = $('<div class="itemM"><img src="images/pm/14.png" class="clear"><p class="clear">Aragaki</p><span class="clear">'+$(".addCon1").val()+'</span></div><br>');
			$("#demo1 .panel-box1").append(discuss);
			$(".addCon").val("");
		}
	});
	$(".addBtn2").click(function(){
		if($(".addCon2").val() == ""){
			alert("评论内容不能为空");
		}else{
			var discuss = $('<div class="itemM"><img src="images/pm/14.png" class="clear"><p class="clear">Aragaki</p><span class="clear">'+$(".addCon2").val()+'</span></div><br>');
			$("#demo2 .panel-box2").append(discuss);
			$(".addCon").val("");
		}
	})


// 新增点击列表事件
	$(".allPro").click(function(e){
		$(".projectList").show();
		$(document).one("click",function(){
			$(".projectList").hide();
			
		});
		e.stopPropagation();
		
	});
	// 项目描述
	$(".deslock").click(function(){

		if($(this).siblings(".activeName").attr('disabled') == 'disabled'){
			$(this).siblings(".activeName").removeAttr('disabled');
			$(".projectDescript textarea").removeAttr('disabled');
			$(this).attr("src","images/common/open.png");
			// $(".deslock").css("margin-left","-2%");
		}else{
			$(this).siblings(".activeName").attr('disabled','disabled');
			$(".projectDescript textarea").attr('disabled','disabled');
			$(this).attr("src","images/common/lock.png");
			// $(".deslock").css("margin-left","-2%");
		}
		// if($(this).siblings(".projectDescript textarea").attr('disabled') == 'disabled'){
			
		// }else{
			
		// }
	});

})