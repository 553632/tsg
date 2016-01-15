
///常用JS
var lang = new Array();
var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
var ie  =navigator.appName=="Microsoft Internet Explorer"?true:false;
var VarPage = 0; //默认分辨率显示多少
var clientHeight = window.screen.height;//客户端分辨率高度
var MaxPageSize = 10; //默认20条每页
function getVarPage()
{
    //alert(clientHeight);
    var x = clientHeight - 768;
    var temp = (x-(x*0.14))/24;
    //alert(temp);
    VarPage = parseInt(temp);
    //alert(VarPage);
    //MaxPageSize += VarPage;

}
function openUrl(url,w,h,stype){
    var left = (window.screen.width-w)/2;
    var top = (window.screen.height-h)/2 - 30;
    //alert(left);alert(top);
    var win = null;
    if(window.showModalDialog && stype=='m'){
        w = w + 10;
        h = h + 55;
		win = window.showModalDialog(url,"","dialogWidth:" + w + "px;dialogheight:" + h + "px");
	}
    else if(stype=='n')
    {
         win = window.open(url, "xWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,modal=yes,width="+w+",height="+h+",top="+top+",left="+left+"");
    }
    else if(stype=='t')
    {
         win = window.open(url, "xWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,modal=yes,width="+w+",height="+h+",top="+top+",left="+left+"");
    }
    else if(stype=='s')
    {
        win = window.open(url, "newWindow", "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=no,copyhistory=no,modal=yes,width="+w+",height="+h+",top="+top+",left="+left+"");
    }
    else if(stype=='f')
    {
         win = window.open(url, "fWindow", "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,modal=yes,width="+w+",height="+h+",top="+top+",left="+left+"");
    }
    else
    {
	   win = window.open(url, "newWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,modal=yes,width="+w+",height="+h+",top="+top+",left="+left+"");
	}
	win.focus();
	//openMode(url,w,h);
}

//按键处理

//获取KEYCODE
function keyCode(evt)
{
    var code = 0;
    //var evt;
    evt = evt || window.event; 
    var a = evt.srcElement || evt.target;
    code = evt.keyCode||evt.which; 
       // alert(code);
    return code;
}
//Enter键自动下一到输入框
function autoNext(evt)
{
    evt = evt || window.event; 
    var a = evt.srcElement || evt.target;

    if(evt.keyCode==13)
    {
        //alert(a.type);
        if(a.type!="button" && a.type!="sublit" && a.type!="reset" && a.type!="file")
        {
            if(ie)
                evt.keyCode = 9;
            //else
                //evt.which = 9;
        }
    }
}
//检查输入的是否是数字
function checkNum(evt)
{
    //兼容IE 和 FF
    evt = evt || window.event; 
    var a = evt.srcElement || evt.target;
    var code = evt.keyCode||evt.which;
    // alert(a);
    //alert(code); 
       
    if(code > '9'.charCodeAt(0) || code < '0'.charCodeAt(0))
    {
        if(code == 13)
        {    
           //alert(a.form);
           //a.form.submit();
           try
           {
               var c = parseInt(a.value)
               if(c > max)
               {
                  c = max;
               }
               if(c < 1)
               {
                  c = 1;
               }

             //  ChanagePage(c);
                query(c);
           } catch(e){alert(e.message);}
        } 
        else if(code!=8) 
        {

              if(ie) 
                evt.returnValue = false;
              else
                evt.preventDefault();   
        }
    }
}
//检查的是不是数字
function TestNum(num)
{
    var rg = "^[0-9\.]{1,}$";
    var reg = new RegExp(rg,"ig");
    if(reg.test(num))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//简便代码
function $(id) {
	return document.getElementById(id);
}
//反选
function CheckOthers(form){
	 for (var i=0;i < form.elements.length;i++){
		var e = form.elements[i];
		if(e.id!="auto")
		{
		    if (e.checked == false){
			    e.checked = true;
		    }else{
			    e.checked = false;
		    }
		}
	 }
}
//全选
function CheckAll(form){
	 for (var i=0;i < form.elements.length;i++){
		var e = form.elements[i];
		if(e.id!="auto")
		    e.checked = true;
	 }
}
//判断长度
function mb_strlen(str) {
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
	}
	return len;
}
//
function closewin()
{
    window.close();
    return false;
}
//屏蔽错误
//window.onerror = killErrors; 
function killErrors() { return true; } 

//事件处理函数
function myHandler(evt){
  if(evt == null){//IE
     evt = window.event;
     evt.returnValue=false;
  }
  else{//Firefox
    evt.preventDefault();//屏蔽Firefox默认处理！！！
  }
    alert(evt.which);
  //修改为TAB键  
  if(evt.which == 13) {
    evt.which=9;
     alert(evt.which);
  }else if(!evt.which && evt.keyCode==13){
     evt.keyCode=9;
  }

}
//AJAX 错误处理函数
function showAjaxProError(error,customMessage)
{
    if(!window.AjaxProDEBUG) {
        var msg = !customMessage ? error.Message : customMessage;
        alert("信息提示：\n\n" + msg);        
    } else {
        var win = window.open("AjaxProError", "");
        var doc = win.document;    
        doc.write("<html><head><title>AjaxProError:")
        doc.write(error.Type);
        doc.write("</title></head><body><div><h3>");
        doc.write("AjaxPro 调用发生未处理的异常");
        doc.write("</h3>");
        doc.write("<pre>");
        doc.write("Type" + ":\n   " + error.Type + "\n"); // 异常类型
        doc.write("Message" + ":\n   " + error.Message + "\n"); // 异常信息  
        doc.write("Stack" + ":\n" + error.Stack + "\n"); // 堆栈跟踪
        doc.write("TargetSite" + ":\n   " + error.TargetSite + "\n"); // 引发异常的方法
        doc.write("Source" + ":\n   " + error.Source + "\n"); // 导致异常的对象 
        doc.write("</pre>");    
        doc.write((new Date()).toLocaleString());
        doc.write("<br/><br/>");
        doc.write("<input type='button' value='close' onclick='window.close()' />");
        doc.write("</div>");
        doc.close();
    }
    return false; 
}

//获取每页显示多少条信息
getVarPage();