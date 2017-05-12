$(function(){
	$(".slide").click(function(){
		$(".myInp").slideToggle();
	});
	// 新增 点击显示项目选项列表
	$(".allPro").click(function(e){
		$(".projectList").show();
		$(document).one("click",function(){
			$(".projectList").hide();
			
		});
		e.stopPropagation();
	});
	// 鼠标点击显示，项目参与人
	$(".countP").click(function(e){
		$(this).siblings(".txt").show();
		$(this).siblings(".txt").stop().animate({height:"450px"},200);
		$(this).siblings(".txt .friends").stop().animate({paddingTop:"60px"},200);
		$(document).one("click",function(){
			$(".txt").hide();
		});
		e.stopPropagation();
	});
	$(".txt").click(function(e){
		e.stopPropagation();
	});
	$(".authorImg").click(function(e){
		$(this).parent().parent().siblings(".writeCon").show();
		$(document).one("click",function(){
			$(".writeCon").hide();
		});
		e.stopPropagation();
	});
	$(".writeCon").click(function(e){
		e.stopPropagation();
	});	
	$(".my1").click(function(){
		$(".con1").css("display","block");
		$(".con2").css("display","none");
		$(".my1").css("color","#00a0ff");
		$(".my1").css("border-bottom","2px solid #00a0e9");
		$(".my2").css("color","#959595");
		$(".my2").css("border-bottom","2px solid #e0e0e0");
	});
	$(".my2").click(function(){
		$(".con2").css("display","block");
		$(".con1").css("display","none");
		$(".my2").css("color","#00a0ff");
		$(".my2").css("border-bottom","2px solid #00a0e9");
		$(".my1").css("color","#959595");
		$(".my1").css("border-bottom","2px solid #e0e0e0");
	});
	// 点击收藏
	$(".attenBtn").click(function(){
		if($(".attenImg").attr("src")=="images/common/attenPro.png"){
			$(".attenImg").attr("src","images/common/attenYellow.png");
			console.log(1);
		}else{
			$(".attenImg").attr("src","images/common/attenPro.png");
		}
	})
})