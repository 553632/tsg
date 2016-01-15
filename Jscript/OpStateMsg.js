// 操作状态类
/******************************************************************
*  类名：OpStateClass
*  作用：在页面上弹出一个状态显示条
*  属性：msg:信息内容; bgColor:背景颜色; Width:长度;Height:高度
*  使用方法：start();开始显示;close();关闭显示
*  Author：liaoyi
*  Create Date：2007-11-24 15:42:11
******************************************************************/
OpStateClass = function() {
    //private fileds
    bgColor = "#7db900";
    borderColor = bgColor;
    mWidth = 200;
    mHeight = 50;
    msg = "数据加载中，请稍后……";
    marginTop = 0;
    marginLeft = 0;
    //private method
    //操作状态窗口
    function StateMsg(){
        var msgw,msgh;
        msgw = mWidth;//提示窗口的宽度
        msgh = mHeight;//提示窗口的高度
        titleheight=0 //提示窗口标题高度
        //bordercolor = bgColor;//提示窗口的边框颜色//ff7d00
        titlecolor="#fff";//提示窗口的标题颜色
        var sWidth,sHeight;
        //sWidth=document.body.scrollWidth;
        //sHeight=window.screen.availHeight-200;
        sWidth = mWidth + 10;
        sHeight = mHeight + 10
        
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
        msgObj.style.marginLeft = marginLeft+0-100+"px" ;
        msgObj.style.marginTop = -75+document.documentElement.scrollTop+marginTop+"px";
        msgObj.style.width =   mWidth + "px";
        msgObj.style.height =  mHeight + "px";
        msgObj.style.textAlign = "center";
    //    msgObj.style.lineHeight ="25px";
        msgObj.style.zIndex = "10001";
        //alert(mHeight);
        
        var title=document.createElement("h4");
        title.setAttribute("id","msgTitle");
        title.setAttribute("align","left");
        title.style.margin="0";
        title.style.padding="5px";
        title.style.background = bgColor;
        //title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=90,finishOpacity=90);";
        title.style.opacity="0.75";
        title.style.border="1px solid " + borderColor;
        title.style.height="20px";
        title.style.paddingTop="15px";
        title.style.paddingLeft="30px";
        title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
        title.style.fontWeight="bold";
        title.style.color="white";
        //title.style.cursor="pointer";
        title.innerHTML = msg;
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
    //关闭窗口
    function closeMsg()
    {
        //alert('11');
        this.sLoading = false;
        var bg = document.getElementById("bgDiv");
        var title = document.getElementById("msgTitle");
        var msgObj = document.getElementById("msgDiv");
        //alert(bg);alert(title);alert(msgObj);
        document.body.removeChild(bg);    
        document.getElementById("msgDiv").removeChild(title);
        document.body.removeChild(msgObj);
    }
    //public list
    this.isLoading = false;
    this.bgColor = bgColor;
    this.borderColor = "";
    this.Width = mWidth;
    this.Height = mHeight;
    this.msg = msg;
    this.marginTop = marginTop;
    this.marginLeft = marginLeft;
    //开始
    this.start = function(){
        this.isLoading = true;
        msg = this.msg;
        bgColor = this.bgColor;
        if(this.borderColor=="")
        {
            this.borderColor = bgColor;
        }
        borderColor = this.borderColor;
        mWidth = this.Width;
        mHeight = this.Height;
        marginLeft = this.marginLeft;
        marginTop = this.marginTop;
        StateMsg();
    }
    //结束
    this.close = closeMsg;
}