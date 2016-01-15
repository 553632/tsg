//定义ID,参数数组arguments[0]
//页面加载调用行为函数
window.$loads = new Array()
window.$load = function(func,arg){
	window.$loads[window.$loads.length] = [func,(arg) ? arg : ""];
}
window.onload = function(){
	for(var i=0; i < window.$loads.length; i++){
		var func = window.$loads[i][0];
		func(window.$loads[i][1])
	}
}
//预先载入图片
function newImage(arg){
     if (document.images) {
          rslt = new Image();
          rslt.src = arg;
          return rslt;
     }
}
function Trim(TRIM_VALUE){
	if(TRIM_VALUE.length < 1){
		return"";
	}
	TRIM_VALUE = RTrim(TRIM_VALUE);
	TRIM_VALUE = LTrim(TRIM_VALUE);
	if(TRIM_VALUE==""){
		return "";
	}
	else{
		return TRIM_VALUE;
	}
}

function RTrim(VALUE){
	var w_space = String.fromCharCode(32);
	var v_length = VALUE.length;
	var strTemp = "";
	if(v_length < 0){
		return"";
	}
	var iTemp = v_length -1;

	while(iTemp > -1){
		if(VALUE.charAt(iTemp) == w_space){
		}
		else{
			strTemp = VALUE.substring(0,iTemp +1);
			break;
		}
		iTemp = iTemp-1;

	}
	return strTemp;
}

function LTrim(VALUE){
	var w_space = String.fromCharCode(32);
	if(v_length < 1){
		return"";
	}
	var v_length = VALUE.length;
	var strTemp = "";
	var iTemp = 0;

	while(iTemp < v_length){
		if(VALUE.charAt(iTemp) == w_space){
			}
			else{
				strTemp = VALUE.substring(iTemp,v_length);
				break;
		}
		iTemp = iTemp + 1;
	} //End While
	return strTemp;
}
//列表分页JS
//--------------------------------------------------------------------------     
var curPage = 1 ;
    $("ctl00_ContentPlaceHolder1_serverPage").innerHTML = curPage; //服务器页当前页
var isLoading = false;
var max = parseInt($('ctl00_ContentPlaceHolder1_maxPage').innerHTML); //最大页
var keyLen = 0; //搜索的原始长度

if(max<1)
{
    max = 1;
}
//------------------------------------------------------------------        
// 获取按键开始的长度  
function getKeyLen()
{
    keyLen = $('key').value.length;
}
//------------------------------------------------------------------          
//自动搜索
function AutoSearch(event)
{
    if($('show').innerHTML=='智能搜索')
    {
        var v = $('key').value.length;
        
        //如果输入框中的字符没有变化，就不搜索，减少服务器负担
        if(v != keyLen)
        {
            if(parseInt($('ctl00_ContentPlaceHolder1_setPage').value) > 50)
                 $('ctl00_ContentPlaceHolder1_setPage').value = 20;
            query(1);
        }

    }
    else
    {
        
        if(keyCode(event) == 13)
        {    
            query(1);
        } 
    }
}    
//------------------------------------------------------------------
function query(p)
{
    var pSize = parseInt($('setPage').value);
    if(p==""||p=="undefined")
    {   p=1; }
    
    var x = true;
    if(p==1)
    {
        if(pSize >= 500)
            x = confirm("数据太多，是否继续显示？");
    }
    if(pSize<10)
    {
        x = false;
    }
    if(x == true)
    {
       var msg = "数据加载中，请稍候……";
       loading(msg);
       setTimeout("ChanagePage("+p+")",10);
       //ChanagePage(p);
    }
    else
    {
        ChanagePage(p);
    }

}
function ExecPage(p)
{
    
}
function loading(msg)
{

   xAlertMsg(msg,200,50);
   isLoading = true;
}
function closeload()
{
   //xcloseMsgShow();
   setTimeout("xcloseMsgShow()",100);
}
//------------------------------------------------------------------
// 在改变分辨率的情况下·背景颜色失效·用ALERT弹出对话框有效
//------------------------------------------------------------------
//if(VarPage!=0)
//{
//    try
//    {
//        //alert(curPage);
 //       ChanagePage(curPage);  //初次访问
//    } catch(e){
//        //alert(e.message);
//    }
//}
//-------------------------------------------------------------------

//Cookie.js


//信息窗口
function xAlertMsg(str,w,h){
    var msgw,msgh,bordercolor;
    msgw=w;//提示窗口的宽度
    msgh=h;//提示窗口的高度
    titleheight=0 //提示窗口标题高度
    bordercolor="#7db900";//提示窗口的边框颜色//ff7d00
    titlecolor="#fff";//提示窗口的标题颜色
    var sWidth,sHeight;
    sWidth=document.body.scrollWidth;
    sHeight=window.screen.availHeight-200;

    var bgObj=document.createElement("div");
    bgObj.setAttribute('id','bgDiv');
    bgObj.style.position="absolute";
    bgObj.style.top="0";
    //bgObj.style.background="#cccccc";
    //bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
    bgObj.style.opacity="0.6";
    bgObj.style.left="0";
    bgObj.style.width=sWidth + "px";
    bgObj.style.height=sHeight + "px";
    bgObj.style.zIndex = "10000";
    document.body.appendChild(bgObj);

    var msgObj=document.createElement("div")
    msgObj.setAttribute("id","msgDiv");
    msgObj.setAttribute("align","center");
//    msgObj.style.background="white";
//    msgObj.style.border="1px solid " + bordercolor;
    msgObj.style.position = "absolute";
    msgObj.style.left = "50%";
    msgObj.style.top = "40%";
    msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
    msgObj.style.marginLeft = "-100px" ;
    msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
    msgObj.style.width = msgw + "px";
    msgObj.style.height =msgh + "px";
    msgObj.style.textAlign = "center";
//    msgObj.style.lineHeight ="25px";
    msgObj.style.zIndex = "10001";

    var title=document.createElement("h4");
    title.setAttribute("id","msgTitle");
    title.setAttribute("align","left");
    title.style.margin="0";
    title.style.padding="5px";
    title.style.background=bordercolor;
    //title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=90,finishOpacity=90);";
    title.style.opacity="0.75";
    title.style.border="1px solid " + bordercolor;
    title.style.height="20px";
    title.style.paddingTop="15px";
    title.style.paddingLeft="30px";
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
    title.style.fontWeight="bold";
    title.style.color="white";
    //title.style.cursor="pointer";
    title.innerHTML=str;
    title.onclick=function(){
    //    document.body.removeChild(bgObj);
    //    document.getElementById("msgDiv").removeChild(title);
    //    document.body.removeChild(msgObj);
    }
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
    var txt=document.createElement("p");
    txt.style.margin="1em 0"
    txt.setAttribute("id","msgTxt");
    //txt.innerHTML=str;
    //alert(str);
    document.getElementById("msgDiv").appendChild(txt);
}
function xcloseMsgShow()
{
    var bg = document.getElementById("bgDiv");
    var title = document.getElementById("msgTitle");
    var msgObj = document.getElementById("msgDiv");
    //alert(bg);alert(title);alert(msgObj);
    document.body.removeChild(bg);    
    document.getElementById("msgDiv").removeChild(title);
    document.body.removeChild(msgObj);
}