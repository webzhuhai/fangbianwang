
var ok1 
var ok2 
var ok3 
var ok4 
var ok5 
var ok6 
function checkTel(){
 	    var reg=/^[1]{1}\d{10}$/;
 	    var phone = $("#tel").val().trim();
 	    	if(!reg.test(phone)){
             $("#errorTel").addClass("error");
              $("#errorTel").html("格式错误！")
              $("#tel").addClass("error2");
             ok1 =false;
 	    	}else{
 	    		 $("#errorTel").addClass("ok");
 	    		 $("#errorTel").html("");
 	    		 $("#tel").className=""
 	    		ok1=true;
 	    	}
 }

function checkPwd(){
 	    var reg=/^\w{6}$/;
 	    var pwd = $("#pwd").val().trim();
 	    	if(!reg.test(pwd)){
              $("#errorPwd").addClass("error");
              $("#errorPwd").html("格式错误！");
                $("#pwd").addClass("error2");
             ok2 =false;
 	    	}else{
 	    		 $("#errorPwd").addClass("ok");
 	    		 $("#errorPwd").html("");
 	    		  $("#pwd").className=""
 	    		ok2=true;
 	    	}
 }

 function checkRePwd(){
 	   var repwd = $("#repwd").val().trim(); 
 	    var pwd = $("#pwd").val().trim(); 
 	       if(repwd!=pwd){
              $("#errorRePwd").html("两次密码不符"); 
               ok3 =false;     
 	       } else{
 	       	    $("#errorRePwd").html("相符");
 	       	     ok3 =true;
 	       }
 }

function checkEmail(){
	 	    var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
 	    var email = $("#email").val().trim();
 	    	if(!reg.test(email)){
              $("#erroremail").addClass("error");
             $("#errorremail").html("格式错误");
              $("#email").addClass("error2"); 
             ok4 =false;
 	    	}else{
 	    		 $("#errorEmail").addClass("ok");
 	    		 $("#errorEmail").html("");
 	    		   $("#email").className=""
 	    		ok4=true;
 	    	}
}
function checkTelImg(){  
	    var img=$("#img").val();
	    if(img==""||img!=1234){
        $("#errorImg").html("格式错误！");
	    }else{
	    ok5=true
	    }
}
  function checkbox(){
  	    if(!$("#mustfollow").checked){
          ok6=false
  	    }
  	   ok6=true
  }
// tijiao

function doSubmit(){
	if(ok1 && ok2 && ok3 && ok4 && ok5 && ok6){  //如果条件都满足的话  
           var yanshi=document.getElementById("yanshi");
           var yanshiFont=document.getElementById("yanshiFont")
              yanshi.style.display="block";
                 var i=5;
                setInterval(show,1000);
                function show(){
                   yanshiFont.innerHTML="将在"+i+"后跳转";
                   i--;
                   if(i==0){
                    $("#indexForm").submit();
                   }
                }
                
	}else{
        alert("不正确")
	}
}


// 第二个页面发送短信倒计时

    var count=60;
    // 先设定一个最大数，一般短信验证就是60秒
   var timer=null;
function message(){	
	var btn=document.getElementById("message")
	   //点击之后，先将button禁用，用户就不能再点击了.
	    timer=setInterval(sendTextMessage,1000);
       btn.disabled=true;       //开启定时器。
	      function sendTextMessage(){
	      		      	  count--;
                   if(count>0){
                     btn.innerHTML="还剩余"+count+"秒"
	      	     }else{
	      	     	btn.innerHTML="发送短信"
	      	     	btn.disabled=false;
	      	     	clearInterval(timer)   //清除定时器。
	      	     	count=60;
	      	     }
	      }	     
}
 function sure(){
          if($("#text-message").val()==1234){
                 $("#sureForm").submit()
          }else{
                alert("错误")
          }
    }
//第三个注册成功页面中最外层盒子开始
     function doShow(){
         var show=document.getElementById("pwd-sign");
         var huisehezi=document.getElementById("huisehezi")
         show.style.display="block";
         huisehezi.style.display="block"
    }
//第三个注册成功页面中最外层盒子结束
  


// 使用密码登陆开始
function load1(){
       var pwd=document.getElementById("pwd");
       var pwd2=document.getElementById("pwd2");
       var pwd2Img=document.getElementById("pwd2-img");
       var unclear=document.getElementById("unclear");
       pwd.style.display="block"
       pwd2.style.display="none";
       pwd2Img.style.display="none";
       unclear.style.display="none"
}
// 使用密码登陆结束

// 使用手机验证吗登陆开始
     function load2(){
          var pwd=document.getElementById("pwd");
          var pwd2=document.getElementById("pwd2");
          var pwd2Img=document.getElementById("pwd2-img");
          var unclear=document.getElementById("unclear");
          pwd.style.display="none"
          pwd2.style.display="block";
       pwd2Img.style.display="block";
       unclear.style.display="block"
     } 

// 使用手机验证吗扽股结束


    // 点击隐藏弹出框
    function hide(){
           var huisehezi=document.getElementById("huisehezi");
           var pwdSign=document.getElementById("pwd-sign");
           huisehezi.style.display="none"
           pwdSign.style.display="none"
    }
// 第三个页面js部分结束














