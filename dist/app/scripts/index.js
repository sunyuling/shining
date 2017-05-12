$(function(){
	$(".join").click(function(){
		$("#popWindow").css("display","block");
		$("#regis").css("display","block");
	})
	$(".closeBtn").click(function(){
		$("#popWindow").css("display","none");
		$("#regis").css("display","none");
	})

    $("#regis1").click(function(){
    	$("#regisDiv1").css("display","block");
    	$("#regisDiv2").css("display","none");
    	$("#regis2").css("background","#eee");
   		$("#regis1").css("background","#fff");
    })	
    $("#regis2").click(function(){
    	$("#regisDiv2").css("display","block");
    	$("#regisDiv1").css("display","none");
    	$("#regis1").css("background","#eee");
    	$("#regis2").css("background","#fff");
    })
    var tel = $(".phoneNumber").val();
    
    var InterValObj; //timer变量，控制时间
	var count = 60; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	var code = ""; //验证码
	var codeLength = 4;//验证码长度
	curCount = count;

    $(".phoneNumber").focus(function(){
    	$(".phoneNumber").keyup(function(){
    		var reg = /^1\d{10}$/;
    		var bol = reg.test($(".phoneNumber").val());
    		console.log(bol);
    		if($(".phoneNumber").val() == ""){
    			$("#errorImg").css("display","block");

    		}else if(bol == false){
    			$("#errorImg").css("display","block");

    		}else{
    			$("#errorImg").css("display","none");

    			$("#btnSendCode").click(function(){
    				$("#btnSendCode").attr("disabled","true");
    				$("#btnSendCode").val(curCount + "后再次获取");
    				InterValObj = window.setInterval(SetRemainTime,1000);
    				
			    	$.ajax({
						url:"http://www.mastersea.com/mastersea/public/home/index/send_msg",
						type:'POST',
						data:{
							mobile:$(".phoneNumber").val(),
						},
					})
					.done(function(data){
						console.log(data);
					})
					.error(function(error){
						console.log("失败");
					});	

    			})
    		}

    	});
    });
     $(".nextBtnClick").click(function(){
     	$.ajax({
		 	url:"http://192.168.1.155/mastersea/public/home/index/check_code",
		 	type:'POST',
		 	data:{
		 		mobile:$(".phoneNumber").val(),
		 		code:$(".phoneYan").val(),
			},
		 })
		 .done(function(data){
		 	console.log(data);
		 })
		 .error(function(error){
		 	console.log("失败");
		 })
		 $("#regis").css("display","none");
		 $(".userMsg").css("display","block");
     })
     $(".closeBtn").click(function(){
     	$(".userMsg").css("display","none");
     	$("#login").css("display","none");
     })

     // 倒计时处理器
     function SetRemainTime(){
     	if(curCount == 0){
     		window.clearInterval(InterValObj); // 停止倒计时
     		$("#btnSendCode").removeAttr("disabled"); // 启用按钮
     		$("#btnSendCode").val("重新发送验证码");
     	}else{
     		curCount--;
     		$("#btnSendCode").val(curCount + "后再次获取");
     	}
     }


	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		loop:true,
		pagination : '.swiper-pagination',
	})
	// 登录按钮

	var rember;

	$("#loginLogo").click(function(){
		$("#popWindow").css("display","block");
		$("#login").css("display","block");
	})
	$("#login1").click(function(){
		$("#loginDiv1").css("display","block");
    	$("#loginDiv2").css("display","none");
    	$("#login2").css("background","#eee");
   		$("#login1").css("background","#fff");
   		$("#login1").css("color","#3faeff");
   		$("#login2").css("color","#333");
	})
	$("#login2").click(function(){
		$("#loginDiv2").css("display","block");
    	$("#loginDiv1").css("display","none");
    	$("#login1").css("background","#eee");
   		$("#login2").css("background","#fff");
   		$("#login2").css("color","#3faeff");
   		$("#login1").css("color","#333");
	})
	 $("#loginBtn").click(function(){
	 	if ($('#rember').prop('checked')) {
   			rember = 1;
   			console.log(1);
	 	}else{
	 		rember = 0;
	 		console.log(0);
	 	}
	 	$.ajax({
	 		url:"http://192.168.1.155/mastersea/public/home/index/user_login",
	 		type:'POST',
	 		data:{
	 			name:$(".user").val(),
	 			pwd:$(".pwd").val(),
	 			isrember:rember,
	 		},
	 	})
	 	.done(function(data){
	 		console.log(data);
	 	})
	 	.error(function(error){
	 		console.log("失败");
	 	})
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

	// 新增 点击显示项目选项列表
	$(".allPro").click(function(e){
		$(".projectList").show();
		$(document).one("click",function(){
			$(".projectList").hide();
			
		});
		e.stopPropagation();
	});
	
	
});
